export interface UseModel<T = Record<string, unknown>, K = Record<string, unknown>> {
  models: T;
  operations: K;
}

export type Maybe<T> = T | null | undefined;
