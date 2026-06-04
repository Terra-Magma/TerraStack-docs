export interface GlobeFeature {
  type: string;
  properties: GlobeFeatureProperties;
  geometry: GlobeFeatureGeometry;
  bbox: [number, number, number, number];
}

interface GlobeFeatureProperties {
  country: string;
  region?: string;
  scalerank: number;
}

interface GlobeFeatureGeometry {
  type: string;
  coordinates: [number, number][][];
}
