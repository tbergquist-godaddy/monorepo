export default abstract class ExternalRepository {
  #baseUrl: string;

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  /**
   *
   * @param pathname including the starting /
   * @param urlParams optional key value
   * @returns the url as a string
   */
  getUrl(pathname: string, urlParams?: Record<string, string>) {
    const url = new URL(`${this.#baseUrl}${pathname}`);
    if (urlParams != null) {
      for (const [key, value] of Object.entries(urlParams)) {
        url.searchParams.append(key, value);
      }
    }
    return url.toString();
  }
}
