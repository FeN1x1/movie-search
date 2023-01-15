import { selectFavoriteMovies } from "../../features/favorites/favoritesSlice";
import { useSelector } from "react-redux";
import TableItem from "../TableItem";

const Table = () => {
  const persistedFavoriteMovies = useSelector(selectFavoriteMovies);

  if (
    persistedFavoriteMovies.favorites &&
    persistedFavoriteMovies.favorites.length !== 0
  ) {
    return (
      <div>
        <div className="flex flex-col items-center">
          {persistedFavoriteMovies.favorites.map((movie, i) => {
            return (
              <div key={i} className="w-[50rem]">
                <TableItem
                  favoriteMovies={[]}
                  movie={movie}
                />
                {persistedFavoriteMovies.favorites.length - 1 !== i && (
                  <div className="my-2 flex border-t-2 border-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <p className="flex justify-center text-sm font-semibold">
        No favorite movies yet
      </p>
    );
  }
};

export default Table;
