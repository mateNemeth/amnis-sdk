import {
  LesserAndGreaterThanFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

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
  amount: AmountString;
  type: TransactionType;
  executionDate: DateString;
  executed: boolean;
  createdAt: DateString;
  updatedAt: DateString;
  account: number;
  transactionDetailId: number | null;
};

export declare type TransactionFilters = PaginationQuery & {
  account?: number;
  type?: TransactionType;
  executed?: boolean;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  abs_amount?: LesserAndGreaterThanFilter<AmountString>;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  createdAt?: LesserAndGreaterThanFilter<DateString>;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  executionDate?: LesserAndGreaterThanFilter<DateString>;
  includeTransactionDetail?: boolean;
};
