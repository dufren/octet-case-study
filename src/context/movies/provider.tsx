import React from 'react';
import { MoviesContext } from './context';
import {
  DropdownFilterKeyType,
  QueryParamsType,
} from '../../types/context/movies';

type ProviderProps = {
  children: JSX.Element;
};

export const MoviesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [queryParams, setQueryParams] = React.useState<QueryParamsType>();
  const [filterValues, setFilterValues] =
    React.useState<DropdownFilterKeyType>('initial');

  return (
    <MoviesContext.Provider
      value={{
        queryParams,
        setQueryParams,
        filterValues,
        setFilterValues,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
