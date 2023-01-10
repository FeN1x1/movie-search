import { IMovieSearchItem } from "../../types";
import { useNavigate } from "react-router-dom";

const TableItem = ({ movie }: { movie: IMovieSearchItem }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="flex cursor-pointer rounded border border-white px-2 transition duration-150 hover:border-gray-400"
    >
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
  );
};

export default TableItem;
