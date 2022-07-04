import { AxiosResponse } from 'axios';
import {
  UseQueryResult,
  QueryObserverResult,
  UseInfiniteQueryResult,
  QueryObserverSuccessResult,
} from 'react-query';

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface ResponseType<T = any> {
  info: Info;
  results: T[];
}

type QueryResultPaginated<T> = (
  ...args: any
) => UseInfiniteQueryResult<ResponseType<T>, unknown>;

type QueryResult<T> = (...args: any) => UseQueryResult<T, unknown>;

type QueryResultList<T> = (...args: any) => UseQueryResult<T[] | T, unknown>;
