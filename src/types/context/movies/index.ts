export type DropdownSortKeyType = 'name' | 'year' | 'imdb';

export type DropdownFilterKeyType = 'favorites' | 'initial';

export type QueryParamsType = {
  q?: string;
  sort?: DropdownSortKeyType;
  order?: 'asc' | 'desc';
};
