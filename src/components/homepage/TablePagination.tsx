import { Fragment } from "react";
import TablePaginationItem from "./TablePaginationItem";

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

  if (totalPageCount <= 5) {
    return (
      <div className="bg-white px-4 py-3 sm:px-6">
        <div className="flex ">
          <div className="m-auto flex gap-2 -space-x-px rounded-md shadow-sm">
            <TablePaginationLeftButton
              handlePageChange={() => handlePageChange(false)}
              pageValue={pageValue}
            />
            {[...Array(totalPageCount)].map((el, idx) => {
              return (
                <Fragment key={idx}>
                  <TablePaginationItem
                    isCurrentPage={idx + 1 === pageValue}
                    handleNavigate={handlePageValue}
                    pageNumber={idx + 1}
                  />
                </Fragment>
              );
            })}

            <TablePaginationRightButton
              handlePageChange={() => handlePageChange(true)}
              pageValue={pageValue}
              moviesCount={+moviesCount}
            />
          </div>
        </div>
      </div>
    );
  } else if (true) {
    return (
      <div className="bg-white px-4 py-3 sm:px-6">
        <div className="flex ">
          <div className="m-auto flex gap-2 -space-x-px rounded-md shadow-sm">
            <TablePaginationLeftButton
              handlePageChange={() => handlePageChange(false)}
              pageValue={pageValue}
            />
            {[...Array(totalPageCount)].map((el, idx) => {
              return (
                <Fragment key={idx}>
                  <TablePaginationItem
                    isCurrentPage={idx + 1 === pageValue}
                    handleNavigate={handlePageValue}
                    pageNumber={idx + 1}
                  />
                </Fragment>
              );
            })}

            <TablePaginationRightButton
              handlePageChange={() => handlePageChange(true)}
              pageValue={pageValue}
              moviesCount={+moviesCount}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default TablePagination;
