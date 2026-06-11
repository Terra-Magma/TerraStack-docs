import Globe, { type GlobeMethods } from 'react-globe.gl';
import globeImageDark from '~/assets/earth-night.jpg';
import globeImageLight from '~/assets/earth-blue-marble.jpg';
import bgImageDark from '~/assets/dark-bg.png';
import bgImageLight from '~/assets/light-bg.png';
import bumpImage from '~/assets/earth-topology.png';
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useTheme } from '~/components/theme';
import type { Location } from '~/components/globe/models/location';
import ApiService from '~/services/api.service';

export default function GlobeComponent() {
  const [data, setData] = useState<{ lat: number; lng: number; pop: number; label: string }[]>([]);
  const [users, setUsers] = useState(0);

  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    () => window.innerWidth,
    () => 0
  );

  useEffect(() => {
    const service = new ApiService();
    service.getGlobeLocations().then((locations: Location[]) => {
      const formattedData = locations.map((location) => {
        let label = `<div class="text-center">Terra<br/>${location.country}`;
        if (location.state) label += `<br/>${location.state}`;
        if (location.county) label += `<br/>${location.county}`;
        if (location.city) label += `<br/>${location.city}`;
        label += `</div>`;
        return {
          lat: location.latitude,
          lng: location.longitude,
          pop: 0,
          label,
        };
      });

      setData(formattedData);
    });
    service.getUserCount().then((count) => {
      setUsers(count);
    });
  }, []);

  const { theme } = useTheme()!;
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().enablePan = false;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.7;
      // @ts-ignore
      if (width < 680 && globeRef.current.controls().getDistance() > 300) {
        // keep the globe at a reasonable size on smaller screens
        const altitude = -0.01 * width + 9.5;
        globeRef.current.pointOfView({ ...globeRef.current.pointOfView(), altitude }, 0);
      }
    }
  });

  return data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{
        width: Math.min(width - 50, 800),
        position: 'relative',
      }}
    >
      <h2 className="text-4xl! mb-1 font-semibold text-center italic">{users} users are forming a new internet.</h2>

      <Globe
        ref={globeRef}
        globeImageUrl={theme === 'light' ? globeImageLight : globeImageDark}
        bumpImageUrl={bumpImage}
        backgroundImageUrl={theme === 'light' ? bgImageLight : bgImageDark}
        width={Math.min(width - 50 - 32, 800)}
        height={Math.min(width - 50 - 32, 800)}
        hexBinPointsData={data}
        hexLabel={(d) => {
          if (globeRef.current) {
            globeRef.current.controls().autoRotateSpeed = 0;
            setTimeout(() => {
              if (globeRef.current) globeRef.current.controls().autoRotateSpeed = 0.7;
            }, 1500);
          }
          return (
            data.find(
              (x) => x.lat == (d.points[0] as { lat: number }).lat && x.lng == (d.points[0] as { lng: number }).lng
            )?.label || ''
          );
        }}
        hexBinResolution={3}
        hexAltitude={0.005}
        hexTopColor={(_) => '#b7ff01'}
        hexSideColor={(_) => '#b7ff01'}
        enablePointerInteraction={true}
        hexBinMerge={false}
      />
    </div>
  );
}
