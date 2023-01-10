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
      <Table
        movies={persistedFavoriteMovies.favorites}
        isLoading={false}
      />
    </div>
  );
};

export default Favorites;
