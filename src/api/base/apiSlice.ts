import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import toast from 'react-hot-toast';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500/',
});

const baseQueryWithError: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error as { status: string; error: string };
    toast.error(error.status + ' ' + error.error);
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQueryWithError,
  endpoints: () => ({}),
});

export const {} = apiSlice;
