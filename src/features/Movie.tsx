import {
  persistFavoriteMovie,
  selectFavoriteMovies,
  removeFavoriteMovie,
} from "./favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../app/services/movie";
import Heart from "../components/icons/Heart";
import Loading from "../components/Loading";
import Error from "../components/Error";
import _ from "lodash";

const Movie = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const persistedFavoriteMovies = useSelector(selectFavoriteMovies);

  const { data, error, isLoading, isFetching } = useGetMovieQuery(
    movieId ?? ""
  );

  const isFavoriteMovie = _.find(persistedFavoriteMovies.favorites, data);

  const filteredMovie = Object.fromEntries(
    Object.entries(data ?? {}).filter(
      ([key]) => !/Ratings|Plot|Poster/.test(key)
    )
  );

  const handleOnHeartClick = () => {
    if (isFavoriteMovie) {
      dispatch(removeFavoriteMovie(data?.imdbID));
    } else {
      dispatch(persistFavoriteMovie(data));
    }
  };

  if (error) {
    return <Error text="Error while fetching the movie" />;
  }

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <div className="mx-auto w-[50rem]">
      <div className="my-auto flex flex-col">
        <div className="flex justify-between border-b border-gray-300 px-4 py-7 text-xl font-semibold">
          <h1>{data?.Title}</h1>
          <div onClick={handleOnHeartClick} className="">
            <div className="cursor-pointer">
              <Heart
                fill={isFavoriteMovie ? "red" : "white"}
                stroke={isFavoriteMovie ? "red" : "black"}
              />
            </div>
          </div>
        </div>
        <div className="flex py-4">
          <div className="w-1/3 px-4 pb-4">
            <img src={data?.Poster} alt="poster" />
          </div>
          <ul className="flex w-2/3 flex-col px-4">
            {Object.entries(filteredMovie ?? {}).map(([key, value]) => (
              <li key={key} className="flex justify-between text-sm">
                <h2 className="font-semibold">{key}</h2>
                <p className="text-left">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
