import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { DateString } from '../../common/types/utility';

export declare type Beneficiary = {
  accountNumber: string;
  bankName: string | null;
  bankCountry: string | null;
  name: string;
  address: string | null;
  city: string | null;
  zip: string | null;
  country: string | null;
  contact: string | null;
};

export declare type PayoutTransactionDetail = {
  id: number;
  account: number;
  currency: string;
  amount: string;
  status: string;
  executionDate: string | null;
  transferredAt: string | null;
  finishedAt: string | null;
  reference: string | null;
  feeSchedule: string | null;
  contact: number;
  beneficiary: Beneficiary;
  fromAutomation: boolean;
};

export declare type PayoutTransactionDetailsFilters = PaginationQuery & {
  currency?: string;
  amount?: LesserOrEqualAndGreaterOrEqualFilter<number> &
    LesserAndGreaterThanFilter<number>;
  executionDate?: LesserAndGreaterThanFilter<DateString>;
};
