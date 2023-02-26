import { ApiResponse, Collection } from './api';

export declare interface IResourceManager<T, F> {
  getResourceById: (id: number) => Promise<ApiResponse<T>>;
  getAllResources: (filters?: F) => Promise<ApiResponse<Collection<T>>>;
}
