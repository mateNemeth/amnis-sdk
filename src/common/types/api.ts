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

export declare interface IResourceManager<T, F> {
  getResourceById: (id: number) => Promise<T>;
  getAllResources: (filters?: F) => Promise<Collection<T>>;
}

export declare type PaginationParameters = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export declare type Collection<T> = {
  data: T[];
  pagination: PaginationParameters;
};
