class MarvelAPI {
  baseUrl = "https://gateway.marvel.com:443/v1/public";
  apiKey = "";

  constructor({ apiKey }) {
    this.apiKey = apiKey;
  }
  async request(endpoint, method, params = {}) {
    if (!this.apiKey) {
      throw new Error("Missing api key");
    }

    const requestParams = { apikey: this.apiKey, ...params };
    let parsedParams = "";
    if (method === "GET") {
      parsedParams = Object.keys(requestParams)
        .filter((key) => !!requestParams[key])
        .map((key) => `${key}=${encodeURIComponent(requestParams[key])}`)
        .join("&");
      endpoint += `?${parsedParams}`;
    }

    const unparsedResponse = await fetch(`${this.baseUrl}/${endpoint}`, {
      method,
    });

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
