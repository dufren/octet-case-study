export enum AuthEnum {
  USER = 'USER',
  IS_AUTHENTICATED = 'IS_AUTHENTICATED',
}

export enum MoviesEnum {
  FAVORITES = 'FAVORITES',
}

export const pathNames = {
  authentication: {
    login: '/',
  },
  movies: {
    moviesPage: '/movies',
  },
} as const;

export const sortOptions = [
  { label: 'Film Adı', id: '1', value: 'name' },
  { label: 'Yayın Yılı', id: '2', value: 'year' },
  { label: 'Imdb Puanı', id: '3', value: 'imdb' },
];

export const filterOptions = [
  { label: 'Favoriler', id: '1', value: 'favorites' },
  { label: 'Yeni Eklenenler', id: '2', value: 'initial' },
];
