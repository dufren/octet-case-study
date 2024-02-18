import React from 'react';
import { MoviesContext } from './context';

export const useQueryParams = () => {
  const context = React.useContext(MoviesContext);
  if (!context) {
    throw new Error('useQueryParams must be used within a MoviesProvider');
  }
  return context.queryParams;
};

export const useFilterValues = () => {
  const context = React.useContext(MoviesContext);
  if (!context) {
    throw new Error('useFilterValues must be used within a MoviesProvider');
  }
  return context.filterValues;
};

export const useSetQueryParams = () => {
  const context = React.useContext(MoviesContext);
  if (!context) {
    throw new Error('useSetQueryParams must be used within a MoviesProvider');
  }
  return context.setQueryParams;
};

export const useSetFilterValues = () => {
  const context = React.useContext(MoviesContext);
  if (!context) {
    throw new Error('useSetFilterValues must be used within a MoviesProvider');
  }
  return context.setFilterValues;
};
