import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-4">
      <ul className="flex gap-6 border-b-2 border-gray-300 pb-1">
        <li
          className="ml-2 cursor-pointer text-sm font-semibold"
          onClick={() => navigate("/")}
        >
          Search Movie
        </li>
        <li
          className="cursor-pointer text-sm font-semibold"
          onClick={() => navigate("/my-favorites")}
        >
          Favorites
        </li>
      </ul>
    </div>
  );
};

export default Header;
