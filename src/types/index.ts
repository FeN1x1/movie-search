export interface IMovieSearchItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieSearch {
  Response: string;
  Search: IMovieSearchItem[];
  totalResults: string;
}

export interface IMovieSearchError {
  Response: string;
  Error: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Ratings: IRating[];
  Rated: string;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
