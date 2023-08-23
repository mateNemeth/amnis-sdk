import { AmountString, DateString } from '../../common/types/utility';

export declare type DealRequest = {
  id: string;
  currencyFrom: string;
  currencyTo: string;
  amountFrom: AmountString;
  amountTo: AmountString;
  valueDate: DateString;
  spotRate: string;
  platformRate: string;
  forwardPoints: string;
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
