import { ResourceManager } from '../../common/classes/resourceManager';
import { CardTransactionDetail, CardTransactionDetailsFilters } from './types';

export class CardTransactionDetails extends ResourceManager<
  CardTransactionDetail,
  CardTransactionDetailsFilters
> {
  protected apiRoute = 'card_transaction_details';
}
