import { ApiErrorResponse, ApiSuccessResponse } from '../../common/types/api';
import { Base } from '../base';
import { CreateDealRequest, DealRequest } from './types';

export class DealRequests extends Base {
  protected apiRoute = 'deal_request';

  public createResource(
    data: CreateDealRequest
  ): Promise<ApiSuccessResponse<DealRequest> | ApiErrorResponse> {
    return this.apiClient.post(this.urlBuilder.buildUrl([this.apiRoute]), data);
  }

  // TODO
  // public getResourceById(
  //   id: string
  // ): Promise<ApiSuccessResponse<DealRequest> | ApiErrorResponse> {
  //   return this.apiClient.get(this.urlBuilder.buildUrl([this.apiRoute, id]));
  // }
}
