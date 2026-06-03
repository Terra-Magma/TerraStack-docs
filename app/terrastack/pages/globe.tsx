import Globe, { type GlobeMethods } from 'react-globe.gl';
import globeImage from '~/assets/earth-night.jpg';
import bgImageDark from '~/assets/dark-bg.png';
import bgImageLight from '~/assets/light-bg.png';
import bumpImage from '~/assets/earth-topology.png';
import React, { type ReactHTMLElement, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useTheme } from '~/components/theme';
import type { Location } from '../models/location';
import ApiService from '~/terrastack/services/api.service';

export default function GlobeComponent() {
  const [data, setData] = useState<{ lat: number; lng: number; pop: number; label: string }[]>([]);
  const [users, setUsers] = useState(0);
  const [range, setRange] = useState({ min: 0, max: 0 });
  const selectColor = (size: number): string => {
    // red = start, green = end
    const red = Math.round(((range.max - size) / (range.max - range.min)) * 255);
    const green = Math.round(((size - range.min) / (range.max - range.min)) * 255);
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}00`;
  };

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
      const formattedData = locations.map((location) => ({
        lat: location.latitude,
        lng: location.longitude,
        pop: location.userCount,
        label: `Terra\n${location.country}\n${location.region}`,
      }));
      setUsers(formattedData.reduce((acc, loc) => acc + loc.pop, 0));
      setData(formattedData);
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
      if (width < 680 && globeRef.current.controls().getDistance() > 300) {
        // keep the globe at a reasonable size on smaller screens
        const altitude = -0.01 * width + 9.5;
        globeRef.current.pointOfView({ ...globeRef.current.pointOfView(), altitude }, 0);
      }
    }
  });

  const getLabel: ReactHTMLElement<HTMLElement> = (d: { center: { lat: number; lng: number } }) => {
    return <span>{data.find((x) => x.lat == d.center.lat && x.lng == d.center.lng)?.label || ''}</span>;
  };

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
        globeImageUrl={globeImage}
        bumpImageUrl={bumpImage}
        backgroundImageUrl={theme === 'light' ? bgImageLight : bgImageDark}
        width={Math.min(width - 50 - 32, 800)}
        height={Math.min(width - 50 - 32, 800)}
        hexBinPointsData={data}
        hexBinResolution={2.5}
        hexBinPointWeight={'pop'}
        hexTopColor={(d) => '#b7ff01'}
        hexSideColor={(d) => '#b7ff01'}
        hexBinMerge={true}
        hexAltitude={(d) => 0.001}
        hexLabel={(d) => getLabel(d)}
      />
    </div>
  );
}
