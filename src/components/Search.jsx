import { useState } from "react";
import Magnifier from "./icon-components/Magnifier";

const Search = ({ setSearch }) => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    setSearch(input);
  };
  return (
    <label
      htmlFor="input"
      className="flex justify-end items-center flex-row-reverse gap-2 pr-5 w-full md:w-auto rounded-sm bg-veryLightGray dark:dark:bg-darkBlue shadow-md  dark:shadow-veryDarkBlue focus-within:outline 
      outline-1 focus-within:outline-veryDarkBlue dark:focus-within:outline-veryLightGray overflow-hidden"
    >
      <input
        type="text"
        id="input"
        placeholder="Search for a country"
        className=" w-full md:w-52 text-sm text-veryDarkBlue dark:text-veryLightGray bg-veryLightGray dark:bg-darkBlue  focus:outline-none peer"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && setSearch(input)}
      />

      <button
        aria-label="search button"
        onClick={handleClick}
        className="py-4 px-6 pr-4  
        hover:bg-slate-200 peer-focus:dark:bg-veryDarkBlue peer-focus:bg-slate-200 dark:peer-focus:bg-veryDarkBlue group "
      >
        <Magnifier
          className={
            "w-3 fill-darkGray dark:fill-veryLightGray group-hover:fill-veryDarkBlueDarker"
          }
        />
      </button>
    </label>
  );
};
export default Search;
