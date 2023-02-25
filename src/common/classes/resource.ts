import { Base } from '../../resources/base';
import { ApiResponse, Collection, Resource } from '../types/api';

export declare interface IResourceManager<T> {
  getResourceById: (id: number) => Promise<T>;
  getAllResources: (filters?: any) => Promise<Collection<T>>;
}

export class ResourceManager<T> extends Base {
  async getAllResources(url: URL): Promise<ApiResponse<Collection<T>>> {
    return this.apiClient.request(url);
  }

  async getResourceById(url: URL): Promise<ApiResponse<Resource<T>>> {
    return this.apiClient.request(url);
  }
}
