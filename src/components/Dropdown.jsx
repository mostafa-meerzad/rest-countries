import { useState } from "react";
import Angle from "./Angle";
import { motion } from "framer-motion";

// filter values
const filters = ["africa", "americas", "asia", "europe", "oceania"];

const Dropdown = ({ setFilter }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div
      className="relative flex shadow-md rounded-sm dark:shadow-veryDarkBlue gap-4 p-3 text-sm text-veryDarkBlue dark:text-veryLightGray bg-veryLightGray dark:bg-darkBlue  cursor-pointer capitalize "
      onClick={() => setIsDropDownOpen(!isDropdownOpen)}
    >
      filter by region
      <Angle
        className={`w-3 fill-veryDarkBlue dark:fill-white`}
        initial={{ rotate: "0" }}
        animate={isDropdownOpen ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.ul
        className={` flex flex-col px-3 gap-2 absolute top-[110%] left-0 w-full overflow-hidden  rounded-sm text-veryDarkBlue dark:text-veryLightGray bg-veryLightGray dark:bg-darkBlue  shadow-md dark:shadow-veryDarkBlue `}
        initial={{ height: 0, paddingBlock: 0 }}
        animate={
          isDropdownOpen
            ? { height: "10.5rem", paddingBlock: "1rem" }
            : { height: 0, paddingBlock: 0 }
        }
      >
        {filters.map((filter) => {
          return (
            <li
              key={filter}
              onClick={() => setFilter(filter)}
              className="hover:text-darkGray"
            >
              {filter}
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};
export default Dropdown;
