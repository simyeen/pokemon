// react-query에서 사용할 타입 정의
export interface QueryState<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
  error?: unknown;
}

// Pokemon 타입 정의
export interface Pokemon {
  name: string;
  url: string;
}
