import Globe from 'react-globe.gl';
import globeImage from '~/assets/earth-blue-marble.jpg';
import React, { useEffect, useState } from 'react';
import type { Location } from '../models/location';
import ApiService from '~/terrastack/services/api.service';

export default function GlobePage() {
  const [data, setData] = useState<{ lat: number; lng: number; size: number; href: string; users: number }[]>([]);
  const [range, setRange] = useState({ min: 0, max: 0 });
  const selectColor = (size: number): string => {
    // red = start, green = end
    const red = Math.round(((range.max - size) / (range.max - range.min)) * 255);
    const green = Math.round(((size - range.min) / (range.max - range.min)) * 255);
    console.log({ red, green, size });
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}00`;
  };

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
  return (
    <div>
      <Globe
        globeImageUrl={globeImage}
        pointsData={data}
        pointColor={(location) => selectColor((location as { users: number }).users)}
        pointLabel={(point) => (point as { label: string }).label}
        pointRadius="size"
        onPointClick={(point) => window.open((point as { href: string }).href, '_blank')}
      />
    </div>
  );
}
