import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

type UrlParams = Record<string, number | string>;

interface ShowToastConfig {
  success?: boolean; // Control success toasts
  error?: boolean; // Control error toasts
}

interface AxiosExtraProps {
  urlParams?: UrlParams;
  noAuth?: boolean;
  showToast?: boolean | ShowToastConfig;
}

export type AxiosRequestConfigWithExtraProps = AxiosRequestConfig & AxiosExtraProps;

type AxiosRequestInput = Pick<
  AxiosRequestConfigWithExtraProps,
  'method' | 'url' | 'params' | 'showToast'
>;

export type Endpoints = Record<string, AxiosRequestInput>;

export type InternalAxiosRequestConfigWithExtraProps = InternalAxiosRequestConfig & AxiosExtraProps;

export type AxiosRes<T = unknown> = Omit<AxiosResponse<T>, 'config'> & {
  config: InternalAxiosRequestConfig;
};

export type AxiosErr<T = unknown> = Omit<AxiosError<T>, 'config'> & {
  config: InternalAxiosRequestConfig;
};

export interface SuccessOutput<T = unknown> {
  status: number;
  message: string;
  results: T extends unknown[] ? number : number | undefined;
  data: T;
}

// REMEMBER PAGINATION DATA
export interface DocsOutput<T = unknown[]> {
  docs: T[];
  limit: number;
  page: number;
  totalDocs: number;
}

export type SuccessDocsOutput<T> = SuccessOutput<DocsOutput<T>>;

export interface ErrorResponse {
  status: number;
  message: string;
  messages?: string[];
}

export type AxiosOutput<T = unknown, E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps
) => Promise<AxiosRes<O extends false ? SuccessOutput<M> & E : M>>;

export type AxiosDocsOutput<T = unknown[], E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps
) => Promise<AxiosRes<O extends false ? SuccessDocsOutput<M> & E : M>>;

export interface AxiosSignal {
  signal?: AbortSignal;
}

export type ThrowAxiosError = (err: unknown) => void;
