import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type FxTransactionDetail = {
  id: number;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: string;
  amountTo: string;
  direction: 'sell' | 'buy' | null;
  dealDate: string;
  valueDate: string;
  type: string;
  spotRate: string;
  forwardPoints: string | null;
  platformRate: string;
  status: string;
  fromAutomation: boolean;
};

export declare type FxTransactionDetailsFilters = PaginationQuery & {
  currencyFrom?: string;
  currencyTo?: string;
  amountFrom?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  amountTo?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  dealDate?: DateString;
  valueDate?: DateString;
};
