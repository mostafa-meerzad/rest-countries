import ThemeSwitch from "../components/ThemeSwitch";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-6 font-Nunito bg-white text-veryDarkBlue shadow-md  md:px-8 xl:px-12 dark:bg-darkBlue dark:text-white max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-xl">Where in the world?</h1>
      <ThemeSwitch />
    </header>
  );
};
export default Header;
