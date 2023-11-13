import { useEffect } from "react";
import { useState } from "react";
import { getAllCountries, getCountry } from "../services/apiServices";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getAllCountries();
      setCountries(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterCountries = async (filter) => {
    setIsLoading(true);
    try {
      const data = await getAllCountries();
      const filtered = data.filter(
        (country) => country.region.toLowerCase() === filter.toLowerCase()
      );
      setCountries(filtered);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchCountry = async (name) => {
    setIsLoading(true);
    try {
      const data = await getCountry(name);
      setCountries(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { countries, isLoading, error, filterCountries, searchCountry };
};
