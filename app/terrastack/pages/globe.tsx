import Globe, { type GlobeMethods } from 'react-globe.gl';
import globeImage from '~/assets/earth-blue-marble.jpg';
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { Location } from '../models/location';
import ApiService from '~/terrastack/services/api.service';

export default function GlobeComponent() {
  const [data, setData] = useState<{ lat: number; lng: number; size: number; href: string; users: number }[]>([]);
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
        size: Math.sqrt(location.userCount), // Size based on user count
        users: location.userCount,
        href: `https://en.wikipedia.org/wiki/${location.name.replace(/ /g, '_')}`, // Link to Wikipedia page
        label: `${location.name}${location.region ? ' ' + location.region : ''}, ${location.country}: ${location.userCount} users`, // Tooltip label
      }));
      setRange({
        max: Math.max(...formattedData.map((d) => d.users)),
        min: Math.min(...formattedData.map((d) => d.users)),
      });
      setData(formattedData);
    });
  }, []);

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

  return data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{
        width: Math.min(width - 50, 800),
        position: 'relative',
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">We all ready have {data.length} users around the globe.</h2>
      <div
        style={{
          borderRadius: '5rem',
          overflow: 'hidden',
          boxShadow: '0px 0px 20px 20px rgba(0,0,16,1)',
          backgroundColor: 'rgba(0,0,16,1)',
          margin: '3rem 1rem',
        }}
      >
        <Globe
          ref={globeRef}
          globeImageUrl={globeImage}
          width={Math.min(width - 50 - 32, 800)}
          pointsData={data}
          pointColor={(location) => selectColor((location as { users: number }).users)}
          pointLabel={(point) => (point as { label: string }).label}
          pointRadius="size"
          onPointClick={(point) => window.open((point as { href: string }).href, '_blank')}
        />
      </div>
    </div>
  );
}
