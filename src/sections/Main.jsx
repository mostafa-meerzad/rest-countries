import Country from "../components/Country";
import { useCountries } from "../hooks/useCountries";

const Main = () => {
  const { countries, isLoading, error } = useCountries();
  return (
    <main className=" p-8 grid gap-8  mt-8">
      {countries.map(
        ({
          name: { official },
          region,
          capital: [capital] = "unknown",
          population,
          flags: { png: flagUrl },
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
    </main>
  );
};
export default Main;
