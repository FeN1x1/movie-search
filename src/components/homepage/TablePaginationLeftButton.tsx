import ArrowLeft from "../icons/ArrowLeft";

const TablePaginationLeftButton = ({
  handlePageChange,
  pageValue,
}: {
  handlePageChange: (forward: boolean) => void;
  pageValue: number;
}) => {
  return (
    <span
      onClick={() => handlePageChange(false)}
      className={`${
        pageValue === 1 && "pointer-events-none bg-gray-300"
      } relative hidden cursor-pointer items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium  text-gray-500 hover:bg-gray-50  focus:z-20 md:inline-flex`}
    >
      <ArrowLeft />
    </span>
  );
};

export default TablePaginationLeftButton;
