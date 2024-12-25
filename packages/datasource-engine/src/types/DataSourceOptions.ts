export type DataSourceOptions<TParams = Record<string, unknown>> = {
  [key: string]: unknown;
  uri?: string;
  params?: TParams;
  method?: string;
  isCors?: boolean;
  withCredentials?: boolean;
  timeout?: number;
  headers?: Record<string, string>;
  isSync?: boolean;
};
