import Country from "../components/Country";
import { useCountries } from "../hooks/useCountries";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";

const Main = () => {
  const { countries, isLoading, error } = useCountries();
  return (
    <main className="max-w-screen-2xl mx-auto">
      <header className="flex justify-between items-center w-full px-4 md:px-8 xl:px-12  my-10 ">
        <Search/>
        <Dropdown  />
      </header>
      <div className=" px-4 md:px-8 xl:px-12  grid gap-8 md:grid-flow-row md:grid-cols-2 xl:grid-cols-4">
        {countries.map(
          ({
            name: { official },
            region,
            capital: [capital] = "unknown",
            population,
            flags: {svg: flagUrl },
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
        )}
      </div>
    </main>
  );
};
export default Main;
