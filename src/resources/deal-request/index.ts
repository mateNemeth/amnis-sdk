import { ApiErrorResponse, ApiSuccessResponse } from '../../common/types/api';
import { Base } from '../base';
import { CreateDealRequest, DealRequest } from './types';

export class DealRequests extends Base {
  protected apiRoute = 'deal_request';

  public createResource(data: CreateDealRequest) {
    return this.apiClient.post(this.urlBuilder.buildUrl([this.apiRoute]), data);
  }

  public getResourceById(
    id: number
  ): Promise<ApiSuccessResponse<DealRequest> | ApiErrorResponse> {
    return this.apiClient.get(this.urlBuilder.buildUrl([this.apiRoute, id]));
  }
}
