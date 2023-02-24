export declare type ApiResponse<T> = {
  '@context': string;
} & T;

export declare type HydraSearchMapping = {
  "@type": "IriTemplateMapping",
  variable: string;
  property: string;
  required: boolean;
}

export declare type HydraSearch = {
  "@type": "hydra:IriTemplate";
  "hydra:template": string;
  "hydra:variableRepresentation": string;
  "hydra:mapping": HydraSearchMapping[];
}

export declare type HydraView = {
  '@id': '/api/accounts?itemsPerPage=2',
  '@type': 'hydra:PartialCollectionView'
}

export declare type Resource<T> = {
  '@id': `/api/${string}/${number}`;
  '@type': `public_api_${string}`;
} & T;

export declare type Collection<T> = {
  '@id': string;
  '@type': 'hydra:Collection',
  'hydra:member': Resource<T>[];
  'hydra:totalItems': number,
  'hydra:search': HydraSearch
  'hydra:view'?: HydraView; 
}

export declare type PaginationQuery = {
  itemsPerPage: number;
  page: number;
}