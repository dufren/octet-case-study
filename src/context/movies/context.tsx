import React from 'react';
import {
  DropdownFilterKeyType,
  QueryParamsType,
} from '../../types/context/movies/index';

type ContextType = {
  queryParams: QueryParamsType | undefined;
  setQueryParams: React.Dispatch<
    React.SetStateAction<QueryParamsType | undefined>
  >;
  filterValues: DropdownFilterKeyType;
  setFilterValues: React.Dispatch<React.SetStateAction<DropdownFilterKeyType>>;
};

export const MoviesContext = React.createContext<ContextType>(
  {} as ContextType
);
