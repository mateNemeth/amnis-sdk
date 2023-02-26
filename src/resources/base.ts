import { ApiClient } from '../common/classes/apiClient';
import { URLBuilder } from '../common/classes/urlBuilder';

export abstract class Base {
  protected abstract apiRoute: string;
  protected urlBuilder = new URLBuilder();

  constructor(protected apiClient: ApiClient) {}
}
