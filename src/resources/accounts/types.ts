import { PaginationQuery } from "../../common/types/api";

declare type AccountTypes = 'normal' | 'collateral';
export declare type Account ={
  id: number;
  type: AccountTypes;
  currency: string;
  availableBalance: number;
  pendingBalance: number;
};

export declare type AccountFilters = PaginationQuery & {
  type?: AccountTypes;
}