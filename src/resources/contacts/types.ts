import { PaginationQuery } from '../../common/types/api';

export declare type Contact = {
  id: number;
  name: string;
  type: string;
  country: string;
  address: string;
  city: string;
  zip: string;
  state: string | null;
  language: string;
  selfContact: boolean;
};

export declare type ContactFilters = PaginationQuery;
