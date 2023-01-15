import { IMovieSearchItem } from "../types";
import { useNavigate } from "react-router-dom";
import Heart from "./icons/Heart";

const TableItem = ({
  movie,
  favoriteMovies,
}: {
  movie: IMovieSearchItem;
  favoriteMovies: IMovieSearchItem[];
}) => {
  const navigate = useNavigate();

  const isFavorite = favoriteMovies.find(
    (favMovie) => favMovie.imdbID === movie.imdbID
  );

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="flex cursor-pointer justify-between rounded border border-white px-2 transition duration-150 hover:border-gray-400"
    >
      <div className="flex">
        <img
          src={movie.Poster}
          alt="avatar"
          className="my-auto mr-2 h-10 w-10 rounded-full"
        />
        <div className="flex flex-col p-3">
          <h2 className="mb-2 text-sm font-semibold">{movie.Title}</h2>
          <p className="text-sm font-semibold text-gray-400">{movie.Year}</p>
        </div>
      </div>
      {isFavorite && (
        <div className="my-auto scale-75">
          <Heart fill="red" stroke="red" />
        </div>
      )}
    </div>
  );
};

export default TableItem;
