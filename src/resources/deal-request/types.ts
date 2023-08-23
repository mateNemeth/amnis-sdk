import { AmountString, DateString } from '../../common/types/utility';

export declare type DealRequest = {
  id: number;
};

export declare type CreateDealRequest = {
  currencyFrom: string | null;
  currencyTo: string | null;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amountFrom: AmountString | null;
  /**
   * Value must match regular expression ^(\d+.\d\d)$
   */
  amountTo: AmountString | null;
  /**
   * Datestring in the format of YYYY-MM-DD
   */
  valueDate: DateString;
};
