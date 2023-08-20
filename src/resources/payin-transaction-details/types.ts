import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type PayinTransactionDetail = {
  id: number;
  currency: string;
  amount: string;
  executionDate: string | null;
  comment: string | null;
  subType: string;
  payerName: string | null;
};

export declare type PayinTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  amount?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  executionDate?: LesserAndGreaterThanFilter<DateString>;
};
