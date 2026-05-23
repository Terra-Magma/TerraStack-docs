import axios from 'axios';
import type { Location } from '../models/location';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error('Missing required env value: VITE_API_BASE_URL');
}

export default class ApiService {
  private baseUrl = apiBaseUrl;

  public async getGlobeLocations(): Promise<Location[]> {
    const options = {
      method: 'GET',
      url: `${this.baseUrl}globe-locations`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
