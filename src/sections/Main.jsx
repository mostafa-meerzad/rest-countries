import Country from "../components/Country";
import { useCountries } from "../hooks/useCountries";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import Error from "../components/Error";
import { useState } from "react";
import CountryPreview from "../components/CountryPreview";
import Loading from "../components/Loading";

const Main = () => {
  const { countries, isLoading, error, filterCountries, searchCountry } =
    useCountries();
  // store country info for country-preview if selects a country to preview
  const [country, setCountry] = useState(null);

  const resetCountryPreview = () => {
    setCountry("");
  };

  return (
    <main className="max-w-screen-2xl mx-auto relative ">
      {/* loading component */}
      <Loading isLoading={isLoading} />

      {/* preview a country */}
      {country && (
        <CountryPreview handleCountryReset={resetCountryPreview} {...country} />
      )}

      <header
        className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full px-4 md:px-8 xl:px-12  my-10  ${
          country && "hidden "
        }`}
      >
        <Search setSearch={searchCountry} />
        <Dropdown setFilter={filterCountries} />
      </header>
      <div
        className={` px-4 md:px-8 xl:px-12  grid justify-center gap-8 md:grid-flow-row md:grid-cols-2 xl:grid-cols-4 ${
          country && "hidden "
        }`}
      >
        {/* show error component if there is any error fetching data  */}
        {error ? (
          <Error />
        ) : (
          // otherwise show the data-fetching result
          countries.map(
            ({
              name: { official, common },
              region,
              subregion,
              tld: [tld] = "unknown",
              currencies,
              languages,
              borders,
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
                  commonName={common}
                  subregion={subregion}
                  currencies={currencies}
                  languages={languages}
                  tld={tld}
                  borders={borders}
                  setCountry={setCountry}
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
