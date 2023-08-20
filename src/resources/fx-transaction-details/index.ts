import { ResourceManager } from '../../common/classes/resourceManager';
import { FxTransactionDetail, FxTransactionDetailsFilters } from './types';

export class FxTransactionDetails extends ResourceManager<
  FxTransactionDetail,
  FxTransactionDetailsFilters
> {
  protected apiRoute = 'fx_transaction_details';
}
