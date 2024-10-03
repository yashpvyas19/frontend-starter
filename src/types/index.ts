import type { FC, ReactNode } from 'react';

export type PrimitiveType = string | number | boolean;

export type Obj<T = unknown> = Record<string, T>;

export interface RecursiveType<T> {
  [key: string]: T | RecursiveType<T>;
}

interface Children {
  children: ReactNode;
}

export type Component<E = unknown> = FC<E>;

export type Layout<E = unknown> = FC<Children & E>;

export interface GlobalErrorType {
  error: Error & { digest?: string };
  reset: () => void;
}
