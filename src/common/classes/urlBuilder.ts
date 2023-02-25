import { StringOrNumber } from '../types/utility';

export class URLBuilder {
  protected baseUrl = 'https://api.stage.transfer4sme.ch/api';

  /**
   * Creates an URL object with the given arguments
   *
   * @param path Array of path parts, eg: ['accounts', '1'] -> /accounts/1
   * @param params Optional query params as key-value pairs (object). Undefined values will be removed.
   * @returns URL object, with path and query params set
   */
  public buildUrl(path: StringOrNumber[], params?: Record<string, any>) {
    const url = new URL(`${this.baseUrl}/${path.join('/')}`);
    if (params) {
      const newParams = this.removeEmpty(params);
      const searchParams = new URLSearchParams(newParams);
      url.search = searchParams.toString();
    }
    return url;
  }

  private removeEmpty(obj: Record<string, any>): Record<string, any> {
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
