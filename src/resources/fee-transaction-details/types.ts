import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

export declare type FeeTransactionDetail = {
  id: number;
  account: number;
  currency: string;
  amount: AmountString;
  executionDate: DateString | null;
  comment: string | null;
  status: string;
};

export declare type FeeTransactionDetailsFilters = PaginationQuery & {
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
