const TablePaginationItem = ({
  handleNavigate,
  pageNumber,
  isCurrentPage,
}: {
  handleNavigate: () => void;
  pageNumber: number;
  isCurrentPage: boolean;
}) => {
  return (
    <span
      onClick={handleNavigate}
      className={`${
        isCurrentPage
          ? "border-cyan-500 bg-cyan-50 text-cyan-600"
          : "text-gray-500 hover:bg-gray-50"
      } relative hidden cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500  focus:z-20 md:inline-flex`}
    >
      {pageNumber}
    </span>
  );
};

export default TablePaginationItem;
