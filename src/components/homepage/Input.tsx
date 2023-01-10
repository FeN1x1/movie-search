const Input = ({
  inputValue,
  handleInputValue,
}: {
  inputValue: string;
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="focus:shadow-soft-primary-outline ease-soft appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-sm font-normal outline-none transition-all focus:border-cyan-400 focus:outline-none"
        placeholder="Movie name"
        type="text"
        value={inputValue}
        onChange={handleInputValue}
      />
    </div>
  );
};

export default Input;
