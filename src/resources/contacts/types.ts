import { PaginationQuery } from '../../common/types/api';

export declare type Contact = {
  id: number;
  name: string;
  type: 'legal_entity' | 'person';
  country: string;
  address: string;
  city: string;
  zip: string;
  state: string | null;
  language: string;
  selfContact: boolean;
};

export declare type ContactFilters = PaginationQuery;
