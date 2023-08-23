export declare type PaginationQuery = {
  /**
   * The number of items per page
   * Default value: 30
   */
  itemsPerPage?: number;
  /**
   * The collection page number
   * Default value: 1
   */
  page?: number;
  /**
   * Enable or disable pagination
   * Default value: true
   */
  pagination?: boolean;
};

export declare type LesserAndGreaterThanFilter<T extends number | string> = {
  lt?: T;
  gt?: T;
};

export declare type LesserOrEqualAndGreaterOrEqualFilter<
  T extends number | string
> = {
  lte?: T;
  gte?: T;
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
  statusCode: number;
  detail: string;
  title: string;
};

export declare type ApiSuccessResponse<T> = T & {
  status: 'success';
};
