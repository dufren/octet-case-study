export type GetMoviesTransformedResponse = {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: number;
  category: string;
  isTvSeries: boolean;
  summary: string;
  cover: string;
};

export type GetMovieTransformedResponse = {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: number;
  category: string;
  isTvSeries: boolean;
  summary: string;
  detailImage: string;
};

export type GetMoviesResponse = {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: number;
  category: string;
  isTvSeries: boolean;
  summary: string;
};
