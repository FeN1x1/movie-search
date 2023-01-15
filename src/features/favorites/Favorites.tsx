import Table from "../../components/favorites/Table";
import PageTitle from "../../components/PageTitle";

const Favorites = () => {
  return (
    <div>
      <PageTitle title="Your favorite Movies" />
      <div className="my-8"></div>
      <Table />
    </div>
  );
};

export default Favorites;
