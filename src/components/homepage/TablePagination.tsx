import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import TablePaginationItem from "./TablePaginationItem";

const TablePagination = ({
  moviesCount,
}: {
  moviesCount: string | undefined;
}) => {
  return (
    <div className="bg-white px-4 py-3 sm:px-6">
      <div className="flex ">
        <div className="m-auto flex -space-x-px rounded-md shadow-sm">
          <a className="relative inline-flex cursor-pointer items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <ArrowLeft />
          </a>
          <TablePaginationItem
            isCurrentPage={false}
            handleNavigate={() => {}}
            pageNumber={1}
          />
          <TablePaginationItem
            isCurrentPage={false}
            handleNavigate={() => {}}
            pageNumber={1}
          />
          <TablePaginationItem
            isCurrentPage={false}
            handleNavigate={() => {}}
            pageNumber={1}
          />{" "}
          <TablePaginationItem
            isCurrentPage={true}
            handleNavigate={() => {}}
            pageNumber={1}
          />{" "}
          <TablePaginationItem
            isCurrentPage={false}
            handleNavigate={() => {}}
            pageNumber={1}
          />
          <span className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
