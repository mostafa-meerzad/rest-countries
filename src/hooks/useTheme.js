import { useEffect, useState } from "react";

export const useTheme = () => {
  const initialTheme = localStorage.theme;
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme(() => {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        return "light";
      });
    } else {
      setTheme(() => {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        return "dark";
      });
    }
  };

  useEffect(() => {
    // check the user's system preferred theme and then toggle the theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return { theme, toggleTheme };
};
