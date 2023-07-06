type filterProps = {
  filterCardHandler: (filter: string[]) => void;
};

const SearchInput: React.FC<filterProps> = (props) => {
  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let filterList = event.target
      .value.trim()
      .split(",")
      .map((el) => el.trim());
    props.filterCardHandler(filterList);
  };

  return (
    <form className="flex justify-end">
      <input
        className="border border-black rounded-xl m-4"
        type="text"
        onChange={filterHandler}
      />
    </form>
  );
};

export default SearchInput;
