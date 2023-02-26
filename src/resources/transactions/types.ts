import {
  LesserAndGreaterThanFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type TransactionType =
  | 'fee'
  | 'fx'
  | 'peer'
  | 'payout'
  | 'payin'
  | 'card';

export declare type Transaction = {
  id: number;
  currency: string;
  amount: number;
  type: TransactionType;
  executionDate: string;
  executed: boolean;
  createdAt: string;
  updatedAt: string;
  account: number;
};

export declare type TransactionFilters = PaginationQuery & {
  account?: number;
  type?: TransactionType;
  executed?: boolean;
  abs_amount?: LesserAndGreaterThanFilter<number>;
  createdAt?: LesserAndGreaterThanFilter<DateString>;
  executionDate?: LesserAndGreaterThanFilter<DateString>;
  lol?: string;
};
