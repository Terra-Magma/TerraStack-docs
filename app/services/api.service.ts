import axios from 'axios';
import type { Location } from '~/components/globe/models/location';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error('Missing required env value: VITE_API_BASE_URL');
}

export default class ApiService {
  private baseUrl = apiBaseUrl;

  public async getGlobeLocations(): Promise<Location[]> {
    const options = {
      method: 'GET',
      url: `${this.baseUrl}locations`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async getUserCount(): Promise<number> {
    const options = {
      method: 'GET',
      url: `${this.baseUrl}users/count`,
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
}
