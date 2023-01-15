import { selectFavoriteMovies } from "../../features/favorites/favoritesSlice";
import { useSelector } from "react-redux";

import Envelope from "../icons/Envelope";
import TableItem from "../TableItem";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";

import { useGetMoviesListWPageQuery } from "../../app/services/movie";
import TablePagination from "./TablePagination";

const Table = ({ searchTerm }: { searchTerm: string }) => {
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useGetMoviesListWPageQuery({
    name: filteredSearchTerm,
    page,
  });

  useEffect(() => {
    if (searchTerm.length > 3) {
      setFilteredSearchTerm(searchTerm);
    }
  }, [searchTerm]);

  const persistedFavoriteMovies = useSelector(selectFavoriteMovies);

  console.log(data?.Search);
  console.log(persistedFavoriteMovies);

  if (isFetching || isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error text="Error while fetching movies" />;
  }

  if (data?.Search) {
    return (
      <div>
        <div className="flex flex-col items-center">
          {data?.Search.map((movie, i) => {
            return (
              <div key={i} className="w-[50rem]">
                <TableItem
                  favoriteMovies={persistedFavoriteMovies.favorites}
                  movie={movie}
                />
                {data.Search.length - 1 !== i && (
                  <div className="my-2 flex border-t-2 border-gray-300" />
                )}
              </div>
            );
          })}
        </div>
        {data?.totalResults && +data?.totalResults > 10 && (
          <TablePagination
            moviesCount={data?.totalResults ?? "0"}
            pageValue={page}
            handlePageValue={(p) => setPage(p)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-1 opacity-40">
        <Envelope />
      </div>
      <div className="text-sm">No Data</div>
    </div>
  );
};

export default Table;
