import { ApiResponse, Collection, Resource } from './api';

export declare interface IResourceManager<T, F> {
  getResourceById: (id: number) => Promise<ApiResponse<Resource<T>>>;
  getAllResources: (filters?: F) => Promise<ApiResponse<Collection<T>>>;
}
