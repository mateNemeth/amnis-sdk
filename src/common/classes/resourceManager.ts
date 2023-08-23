import { Base } from '../../resources/base';
import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Collection,
  IResourceManager
} from '../types/api';
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

  async getAllResources(
    filters?: F
  ): Promise<ApiSuccessResponse<Collection<T>> | ApiErrorResponse> {
    return this.apiClient.get(this.urlBuilder.buildUrl([this.apiRoute]), {
      params: filters
    });
  }

  async getResourceById(
    id: number
  ): Promise<ApiSuccessResponse<T> | ApiErrorResponse> {
    return this.apiClient.get(this.urlBuilder.buildUrl([this.apiRoute, id]));
  }
}
