import Axios, { AxiosError, AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
}); // use your own URL here or environment variable

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  // const source = Axios.CancelToken.source();
  return AXIOS_INSTANCE({
    ...config,
    ...options,
    // cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  // promise.cancel = () => {
  //   source.cancel("Query was cancelled");
  // };

  // return promise;
};

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<Data> = Data;
