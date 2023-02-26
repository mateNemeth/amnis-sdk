import { Base } from '../../resources/base';
import { ApiResponse, Collection, Resource } from '../types/api';
import { IResourceManager } from '../types/resources';
import { AnyType } from '../types/utility';
import { ApiClient } from './apiClient';

export abstract class ResourceManager<
    T,
    F extends Record<string, AnyType> = Record<string, never>
  >
  extends Base
  implements IResourceManager<T, F>
{
  constructor(protected apiClient: ApiClient) {
    super(apiClient);
  }

  async getAllResources(filters?: F): Promise<ApiResponse<Collection<T>>> {
    return this.apiClient.request(
      this.urlBuilder.buildUrl([this.apiRoute], filters)
    );
  }

  async getResourceById(id: number): Promise<ApiResponse<Resource<T>>> {
    return this.apiClient.request(
      this.urlBuilder.buildUrl([this.apiRoute, id])
    );
  }
}
