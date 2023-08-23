import { AnyType, StringOrNumber } from '../types/utility';

export class URLBuilder {
  protected baseUrl = 'https://api.amnistreasury.com/api';

  /**
   * Creates an URL object with the given arguments
   *
   * @param path Array of path parts, eg: ['accounts', '1'] -> /accounts/1
   * @param params Optional query params as key-value pairs (object). Undefined values will be removed.
   * @returns URL object, with path and query params set
   */
  public buildUrl(path: StringOrNumber[]) {
    return new URL(`${this.baseUrl}/${path.join('/')}`);
  }

  private removeEmpty(obj: Record<string, AnyType>): Record<string, AnyType> {
    return Object.entries(obj)
      .filter(([_, v]) => v !== undefined)
      .reduce(
        (acc, [k, v]) => ({
          ...acc,
          [k]: v === Object(v) ? this.removeEmpty(v) : v
        }),
        {}
      );
  }
}
