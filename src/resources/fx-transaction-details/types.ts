import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

export declare type FxTransactionDetail = {
  id: number;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: AmountString;
  amountTo: AmountString;
  direction: 'sell' | 'buy' | null;
  dealDate: DateString;
  valueDate: DateString;
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
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amountFrom?: LesserOrEqualAndGreaterOrEqualFilter<AmountString> &
    LesserAndGreaterThanFilter<AmountString>;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amountTo?: LesserOrEqualAndGreaterOrEqualFilter<AmountString> &
    LesserAndGreaterThanFilter<AmountString>;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  dealDate?: DateString;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  valueDate?: DateString;
};
