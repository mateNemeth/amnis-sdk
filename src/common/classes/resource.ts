import { ApiResponse, Collection, Resource } from '../types/api';
import { ApiClient } from './apiClient';

export declare interface IResourceManager<T> {
  getResourceById: (url: URL) => Promise<ApiResponse<T>>;
  getAllResources: (url: URL) => Promise<ApiResponse<Collection<T>>>;
}

export class ResourceManager<T> implements IResourceManager<T> {
  constructor(private apiClient: ApiClient) {}

  async getAllResources(url: URL): Promise<ApiResponse<Collection<T>>> {
    return this.apiClient.request(url);
  }

  async getResourceById(url: URL): Promise<ApiResponse<Resource<T>>> {
    return this.apiClient.request(url);
  }
}
