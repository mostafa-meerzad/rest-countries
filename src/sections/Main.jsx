import Country from "../components/Country";
import { useCountries } from "../hooks/useCountries";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion";
import Error from "../components/Error";

const Main = () => {
  const { countries, isLoading, error, filterCountries, searchCountry } =
    useCountries();

  return (
    <main className="max-w-screen-2xl mx-auto relative">
      <motion.div
        className={`fixed grid content-center w-full h-screen top-0 left-0  bg-darkBlue  bg-opacity-50  z-10 `}
        initial={{ opacity: 0, zIndex: -10 }}
        animate={
          isLoading ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -10 }
        }
      >
        <Spinner className="w-8 h-8 mx-auto dark:fill-veryLightGray animate-spin " />
      </motion.div>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full px-4 md:px-8 xl:px-12  my-10 ">
        <Search setSearch={searchCountry} />
        <Dropdown setFilter={filterCountries} />
      </header>
      <div className=" px-4 md:px-8 xl:px-12  grid gap-8 md:grid-flow-row md:grid-cols-2 xl:grid-cols-4">
        {error ? (
          <Error />
        ) : (
          countries.map(
            ({
              name: { official },
              region,
              capital: [capital] = "unknown",
              population,
              flags: { svg: flagUrl },
            }) => {
              return (
                <Country
                  key={official}
                  name={official}
                  region={region}
                  capital={capital}
                  population={population}
                  imgUrl={flagUrl}
                />
              );
            }
          )
        )}
      </div>
    </main>
  );
};
export default Main;
