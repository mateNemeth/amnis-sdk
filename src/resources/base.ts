import { ApiClient } from '../common/classes/apiClient';
import { URLBuilder } from '../common/classes/urlBuilder';

export abstract class Base {
  protected urlBuilder = new URLBuilder();

  constructor(protected apiClient: ApiClient) {}
}
