type filterProps = {
  filterCardHandler: (filter: string[]) => void;
};

const SearchInput: React.FC<filterProps> = (props) => {
  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let filterList = event.target.value.split(",").map((el) => el.trim());
    props.filterCardHandler(filterList);
  };

  return (
    <form>
      <input
        className="border border-black rounded-xl py-2 px-4 w-96 bg-gray-600 text-gray-200"
        type="text"
        onChange={filterHandler}
      />
    </form>
  );
};

export default SearchInput;
