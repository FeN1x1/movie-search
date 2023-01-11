import { useState } from "react";

import Input from "../components/homepage/Input";
import Table from "../components/homepage/Table";
import PageTitle from "../components/PageTitle";

import { useGetMoviesListWPageQuery } from "../app/services/movie";
import TablePagination from "../components/homepage/TablePagination";
// import TablePagination from "../components/homepage/TablePagination";

const Homepage = () => {
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetMoviesListWPageQuery({
    name: input,
    page,
  });

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  return (
    <div className="flex flex-col gap-8">
      <PageTitle title="Find your movie" />
      <Input
        inputValue={input}
        handleInputValue={(e) => setInput(e.target.value)}
      />
      <Table movies={data?.Search} isLoading={isLoading} />
      {data?.totalResults && +data?.totalResults > 10 && (
        <TablePagination
          moviesCount={data?.totalResults ?? "0"}
          pageValue={page}
          handlePageValue={(p) => setPage(p)}
        />
      )}
    </div>
  );
};

export default Homepage;
