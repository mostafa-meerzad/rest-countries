import { useTheme } from "../hooks/useTheme";
import Moon from "./Moon";
import Sun from "./Sun";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="flex gap-3 capitalize font-semibold ">
      {theme === "dark" ? (
        <>
          <Moon className=" scale-40  "/> dark mode
        </>
      ) : (
        <>
          <Sun className=" scale-40  "/> light mode
        </>
      )}
    </button>
  );
};
export default ThemeSwitch;
