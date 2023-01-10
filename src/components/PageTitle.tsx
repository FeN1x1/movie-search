const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="mt-8 flex items-center justify-center text-xl font-semibold">
      {title}
    </h1>
  );
};

export default PageTitle;
