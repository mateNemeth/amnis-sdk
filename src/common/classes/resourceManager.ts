import { Base } from '../../resources/base';
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

  async getAllResources(filters?: F): Promise<T[]> {
    return this.apiClient.get(
      this.urlBuilder.buildUrl([this.apiRoute], filters)
    );
  }

  async getResourceById(id: number): Promise<T> {
    return this.apiClient.get(this.urlBuilder.buildUrl([this.apiRoute, id]));
  }
}
