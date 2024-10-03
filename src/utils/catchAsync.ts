import { throwAxiosError } from '@/api/utils.ts';
import type { AxiosSignal, DocsOutput } from '@/types/axios.type.ts';
import type { Promisable } from 'type-fest';

type DefaultParamsInput = AxiosSignal;

export interface CatchAsyncOptions {
  throwError?: boolean;
}

type CatchAsyncOutputCond<T, P> = P extends true ? DocsOutput<T> : P extends false ? T[] : T;

type CatchAsyncInput<T, R, P> = (
  data: T,
  options?: CatchAsyncOptions
) => Promise<CatchAsyncOutputCond<R, P>>;

type CatchAsyncOutput<T, R, P, E> = (
  data: T,
  options?: CatchAsyncOptions
) => Promise<CatchAsyncOutputCond<R, P> | E | undefined>;

type ErrorCB<E> = (err: unknown) => Promisable<E>;

type CatchAsync = <I, R, P = unknown | boolean, E = undefined, T = I & DefaultParamsInput>(
  fn: CatchAsyncInput<T, R, P>,
  errorCB?: ErrorCB<E>
) => CatchAsyncOutput<T, R, P, E>;

const catchAsync: CatchAsync =
  (fn, errorCB = undefined) =>
  async (data, options = {}) => {
    const { throwError = true } = options;

    try {
      return await fn(data, options);
    } catch (err) {
      if (throwError) throwAxiosError(err);
      return errorCB ? errorCB(err) : undefined;
    }
  };

export default catchAsync;
