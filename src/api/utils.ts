import { AxiosError } from 'axios';

import type { ThrowAxiosError } from '@/types/axios.type.ts';
import { AppError } from '@/utils/appError.ts';

export const throwAxiosError: ThrowAxiosError = err => {
  const STATUS_CODE = 400;

  const message = err instanceof AxiosError ? err.response?.data.message : err;
  const statusCode =
    err instanceof AxiosError ? (err.response?.status ?? STATUS_CODE) : STATUS_CODE;
  throw new AppError(message, statusCode, {
    error: err,
    ...(err instanceof AxiosError ? { res: err.response?.data ?? null } : null),
  });
};
