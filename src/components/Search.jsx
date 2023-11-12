import Magnifier from "./Magnifier";

const Search = () => {
  return (
    <label
      htmlFor="search"
      className="flex justify-start items-center gap-4 px-5 py-3 rounded-sm bg-veryLightGray dark:dark:bg-darkBlue  shadow-md  dark:shadow-veryDarkBlue focus-within:border focus-within:border-veryDarkBlue dark:focus-within:border-veryLightGray"
    >
      <Magnifier className={"w-3 fill-darkGray dark:fill-veryLightGray"} />
      <input
        type="text"
        id="search"
        placeholder="Search for a country"
        className=" w-52 text-sm text-veryDarkBlue dark:text-veryLightGray bg-veryLightGray dark:dark:bg-darkBlue  focus:outline-none"
      />
    </label>
  );
};
export default Search;
