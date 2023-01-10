import Envelope from "../icons/Envelope";
import TableItem from "./TableItem";
import { IMovieSearchItem } from "../../types";
import Loading from "../Loading";

const Table = ({
  movies,
  isLoading,
}: {
  movies: IMovieSearchItem[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (movies) {
    return (
      <div>
        <div className="flex flex-col items-center">
          {movies?.map((movie, i) => {
            return (
              <div key={i} className="w-[50rem]">
                <TableItem movie={movie} />
                {movies.length - 1 !== i && (
                  <div className="my-2 flex border-t-2 border-gray-300" />
                )}
              </div>
            );
          })}
        </div>
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
