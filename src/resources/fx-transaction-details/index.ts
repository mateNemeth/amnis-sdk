import { ResourceManager } from '../../common/classes/resourceManager';
import { FxTransactionDetail, FxTransactionDetailsFilters } from './types';

export class FxTransactionDetails extends ResourceManager<
  FxTransactionDetail,
  FxTransactionDetailsFilters
> {
  protected apiRoute = 'wallet_transaction_details';
}
