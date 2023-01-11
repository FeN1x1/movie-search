import ArrowRight from "../icons/ArrowRight";

const ITEMS_PER_PAGE = 10;

const TablePaginationRightButton = ({
  handlePageChange,
  pageValue,
  moviesCount,
}: {
  handlePageChange: (forward: boolean) => void;
  pageValue: number;
  moviesCount: number;
}) => {
  return (
    <span
      onClick={() => handlePageChange(true)}
      className={`${
        pageValue * ITEMS_PER_PAGE - moviesCount > 1 &&
        "pointer-events-none bg-gray-300"
      } relative hidden cursor-pointer items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium  text-gray-500 hover:bg-gray-50  focus:z-20 md:inline-flex`}
    >
      <ArrowRight />
    </span>
  );
};

export default TablePaginationRightButton;
