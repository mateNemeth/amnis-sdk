import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

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
  amount: string;
  originalCurrency: string;
  originalAmount: string;
  type: string;
  executionDate: string;
  settlementDate: string | null;
  status: string;
  card: Card;
  merchant: Merchant;
};

export declare type CardTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  amount?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  executionDate?: DateString;
};
