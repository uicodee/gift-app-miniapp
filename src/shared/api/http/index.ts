import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  responseType: "json",
  withCredentials: false,
  baseURL: "https://api.gift-app.tw1.su/",
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return api({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;
