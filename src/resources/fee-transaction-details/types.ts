import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type FeeTransactionDetail = {
  id: number;
  account: number;
  currency: string;
  amount: string;
  executionDate: string | null;
  comment: string | null;
  status: string;
};

export declare type FeeTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  amount?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  executionDate?: DateString;
};
