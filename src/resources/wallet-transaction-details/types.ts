import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type WalletTransactionDetail = {
  id: number;
  currency: string;
  amount: string;
  executionDate: string;
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
  amount?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  executionDate?: LesserAndGreaterThanFilter<DateString>;
};
