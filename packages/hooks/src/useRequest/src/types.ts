import { DependencyList } from 'react';

export type Service<TData, TParams extends any[]> = (...arg: TParams) => Promise<TData>;

export interface Options<TData, TParams extends any[]> {
  manual?: boolean;
  ready?: boolean;
  defaultParams?: TParams;
  loadingDelay?: number;
  refreshDeps?: DependencyList;
  refreshDepsAction?: (...params: TParams) => void;
  onBefore?: (params: TParams) => void;
}

export interface FetchState<TData, TParams extends any[]> {
  loading?: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
}

export interface PluginReturn<TData, TParams extends any[]> {
  loading?: boolean;
  manual?: boolean;
  onBefore?: (
    params: TParams,
  ) => ({ stopNow?: boolean; returnNow?: boolean } & Partial<FetchState<TData, TParams>>) | void;
  onRequest?: (params: TParams) => void;
}

export type Plugin<TData, TParams extends any[]> = {
  (instance: any, options: Options<TData, TParams>): PluginReturn<TData, TParams>;
  onInit?: (options: Options<TData, TParams>) => FetchState<TData, TParams>;
};
export type Timeout = ReturnType<typeof setTimeout>;
