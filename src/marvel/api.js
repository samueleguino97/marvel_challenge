class MarvelAPI {
  baseUrl = "https://gateway.marvel.com:443/v1/public";
  apiKey = "";

  constructor({ apiKey }) {
    this.apiKey = apiKey;
  }
  async request(endpoint, method, params) {
    if (!this.apiKey) {
      throw new Error("Missing api key");
    }
    const unparsedResponse = await fetch(
      `${this.baseUrl}/${endpoint}?apikey=${this.apiKey}`,
      {
        method,
      }
    );

    if (
      unparsedResponse.headers.get("content-type").includes("application/json")
    ) {
      return unparsedResponse.json();
    }

    return unparsedResponse;
  }

  get(endpoint, params) {
    return this.request(endpoint, "GET", params);
  }
}
export default MarvelAPI;
