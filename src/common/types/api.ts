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
  getResourceById: (
    id: number
  ) => Promise<ApiSuccessResponse<T> | ApiErrorResponse>;
  getAllResources: (
    filters?: F
  ) => Promise<ApiSuccessResponse<Collection<T>> | ApiErrorResponse>;
}

export declare type PaginationParameters = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export declare type Collection<T> = {
  status: 'success';
  data: T[];
  pagination: PaginationParameters;
};

export declare type ApiErrorResponse = {
  status: 'error';
  detail: string;
  title: string;
};

export declare type ApiSuccessResponse<T> = T & {
  status: 'success';
};
