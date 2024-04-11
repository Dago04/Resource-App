import SearchCategories from "./SearchCategories";
import SearchWords from "./SearchWords";

const SearchBar = () => {
  return (
    <>
      <form className="max-w-lg mx-auto">
        <div className="flex">
          {/* <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label> */}

          <SearchCategories />
          <SearchWords />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
