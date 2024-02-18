export type BaseMovieResponse = {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: number;
  category: string;
  isTvSeries: boolean;
  summary: string;
};

export type GetMoviesTransformedResponse = BaseMovieResponse & {
  cover: string;
};

export type GetMovieTransformedResponse = BaseMovieResponse & {
  detailImage: string;
};
