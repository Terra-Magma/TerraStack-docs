import Globe from 'react-globe.gl';

export default function GlobePage() {
  const myData = [
    { lat: 37.7749, lng: -122.4194, size: 2, color: 'red', href: 'https://en.wikipedia.org/wiki/San_Francisco' }, // San Francisco
    { lat: 51.5074, lng: -0.1278, size: 3, color: 'blue', href: 'https://en.wikipedia.org/wiki/London' }, // London
    { lat: 35.6895, lng: 139.6917, size: 1, color: 'green', href: 'https://en.wikipedia.org/wiki/Tokyo' }, // Tokyo
  ];
  return (
    <div>
      <Globe
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        pointsData={myData}
        pointRadius="size"
        onPointClick={(point) => window.open((point as { href: string }).href, '_blank')}
      />
    </div>
  );
}
