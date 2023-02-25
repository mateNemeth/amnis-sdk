import { Base } from '../../resources/base';
import { ApiResponse, Collection, Resource } from '../types/api';

export declare interface IResourceManager<T> {
  getResourceById: (token: string, id: number) => Promise<T>;
  getAllResources: (token: string) => Promise<Collection<T>>;
}

export class ResourceManager<T> extends Base {
  async getAllResources(
    url: URL,
    token: string
  ): Promise<ApiResponse<Collection<T>>> {
    return this.request(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
  }

  async getResourceById(
    url: URL,
    token: string
  ): Promise<ApiResponse<Resource<T>>> {
    return this.request(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
  }
}
