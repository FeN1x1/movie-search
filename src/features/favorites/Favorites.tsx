import { useSelector } from "react-redux";
import Table from "../../components/homepage/Table";
import PageTitle from "../../components/PageTitle";
import { selectFavoriteMovies } from "./favoritesSlice";

const Favorites = () => {
  const persistedFavoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <div>
      <PageTitle title="Your favorite Movies" />
      <div className="my-8"></div>

      {persistedFavoriteMovies.favorites.length !== 0 ? (
        <Table movies={persistedFavoriteMovies.favorites} isLoading={false} />
      ) : (
        <p className="flex justify-center text-sm font-semibold">
          No favorite movies yet
        </p>
      )}
    </div>
  );
};

export default Favorites;
