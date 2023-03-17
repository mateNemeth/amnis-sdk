import { DateString } from './utility';

export declare type PaginationQuery = {
  itemsPerPage?: number;
  page?: number;
};

export declare type LesserAndGreaterThanFilter<T extends number | DateString> =
  {
    lt?: T;
    gt?: T;
  };
