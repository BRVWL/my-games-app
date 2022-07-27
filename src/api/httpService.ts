import axios, { AxiosError } from "axios";

class HttpService {
  private axios = axios.create();

  constructor() {
    /**
     * Intercept request errors and handle them
     */
    this.axios.interceptors.response.use(
      undefined,
      (error: AxiosError<any>) => {
        // error catcher
        console.error(error.response?.data.message);
        return Promise.reject(error);
      }
    );

    /**
     * Sign each request with user's auth token
     */
    this.axios.interceptors.request.use(async (config) => {
      try {
        // Here we can fetch the user with token and so one but for now we have hardcoded token
        return {
          ...config,
          baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
          headers: {
            ...config.headers,
            "X-RapidAPI-Key":
              "5cd67cfb93msh6d63d5fad4185a3p155d5ejsn5f44fbb48e30",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            // Authorization: `Bearer ${token}`,
          },
        };
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }

  public get = this.axios.get;

  public patch = this.axios.patch;

  public post = this.axios.post;

  public put = this.axios.put;

  public delete = this.axios.delete;

  /**
   * For testing purposes
   */
  public _getAxiosInstance() {
    return this.axios;
  }
}

export default new HttpService();
