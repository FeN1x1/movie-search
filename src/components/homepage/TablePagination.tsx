import TablePaginationLeftButton from "./TablePaginationLeftButton";
import TablePaginationRightButton from "./TablePaginationRightButton";

const TablePagination = ({
  moviesCount,
  pageValue,
  handlePageValue,
}: {
  moviesCount: string;
  pageValue: number;
  handlePageValue: (page: number) => void;
}) => {
  const totalPageCount = Math.ceil(+moviesCount / 10);

  const handlePageChange = (forward: boolean) => {
    forward ? handlePageValue(pageValue + 1) : handlePageValue(pageValue - 1);
  };

  return (
    <div className="bg-white px-4 py-3 sm:px-6">
      <div className="flex ">
        <div className="m-auto flex gap-2 -space-x-px rounded-md">
          <TablePaginationLeftButton
            handlePageChange={() => handlePageChange(false)}
            pageValue={pageValue}
          />
          <div className="my-auto px-4 text-gray-500">
            {pageValue} of {totalPageCount}
          </div>
          <TablePaginationRightButton
            handlePageChange={() => handlePageChange(true)}
            pageValue={pageValue}
            moviesCount={+moviesCount}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
