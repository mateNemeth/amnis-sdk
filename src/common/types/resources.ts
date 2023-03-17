export declare interface IResourceManager<T, F> {
  getResourceById: (id: number) => Promise<T>;
  getAllResources: (filters?: F) => Promise<T[]>;
}
