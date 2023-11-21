import { useTheme } from "../hooks/useTheme";
import Moon from "./icon-components/Moon";
import Sun from "./icon-components/Sun";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex gap-3 capitalize font-semibold "
    >
      {theme === "dark" ? (
        <>
          <Sun className=" scale-40  " /> light mode
        </>
      ) : (
        <>
          <Moon className=" scale-40  " /> dark mode
        </>
      )}
    </button>
  );
};
export default ThemeSwitch;
