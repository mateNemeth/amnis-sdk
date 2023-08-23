import {
  LesserAndGreaterThanFilter,
  LesserOrEqualAndGreaterOrEqualFilter,
  PaginationQuery
} from '../../common/types/api';
import { AmountString, DateString } from '../../common/types/utility';

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
  amount: AmountString;
  status: string;
  executionDate: DateString | null;
  transferredAt: DateString | null;
  finishedAt: DateString | null;
  reference: string | null;
  feeSchedule: string | null;
  contact: number;
  beneficiary: Beneficiary;
  fromAutomation: boolean;
};

export declare type PayoutTransactionDetailsFilters = PaginationQuery & {
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
