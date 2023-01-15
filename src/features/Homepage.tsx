import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

import Input from "../components/homepage/Input";
import Table from "../components/homepage/Table";
import PageTitle from "../components/PageTitle";

const Homepage = () => {
  const [input, setInput] = useState<string>("");

  const debouncedInput = useDebounce<string>(input, 500);

  return (
    <div className="flex flex-col gap-8">
      <PageTitle title="Find your movie" />
      <Input
        inputValue={input}
        handleInputValue={(e) => setInput(e.target.value)}
      />
      <Table searchTerm={debouncedInput} />
    </div>
  );
};

export default Homepage;
