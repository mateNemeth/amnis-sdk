import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

export declare type PayinTransactionDetail = {
  id: number;
  currency: string;
  amount: AmountString;
  executionDate: DateString | null;
  comment: string | null;
  subType: string;
  payerName: string | null;
};

export declare type PayinTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amount?: LesserOrEqualAndGreaterOrEqualFilter<AmountString> &
    LesserAndGreaterThanFilter<AmountString>;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  executionDate?: LesserAndGreaterThanFilter<DateString>;
};
