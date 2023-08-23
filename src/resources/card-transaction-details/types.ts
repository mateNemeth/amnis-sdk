import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

export declare type Card = {
  id: number;
  name: string;
  pan4: string;
};

export declare type Merchant = {
  id: number;
  name: string;
  country: string;
};

export declare type CardTransactionDetail = {
  id: number;
  currency: string;
  amount: AmountString;
  originalCurrency: string;
  originalAmount: AmountString;
  type: string;
  executionDate: DateString;
  settlementDate: DateString | null;
  status: string;
  card: Card;
  merchant: Merchant;
};

export declare type CardTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amount?: LesserOrEqualAndGreaterOrEqualFilter<AmountString> &
    LesserAndGreaterThanFilter<AmountString>;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  executionDate?: DateString;
};
