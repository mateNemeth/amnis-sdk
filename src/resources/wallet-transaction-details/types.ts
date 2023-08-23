import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

export declare type WalletTransactionDetail = {
  id: number;
  currency: string;
  amount: AmountString;
  executionDate: DateString;
  collateral: boolean;
  side: 'sender' | 'receiver' | null;
  senderCompanyName: string;
  receiverCompanyName: string;
  senderAccount: number | null;
  receiverAccount: number | null;
  comment: string | null;
  contact: number;
  status: string;
  fromAutomation: boolean;
};

export declare type WalletTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amount?: LesserOrEqualAndGreaterOrEqualFilter<AmountString> &
    LesserAndGreaterThanFilter<AmountString>;
  executionDate?: LesserAndGreaterThanFilter<DateString>;
};
