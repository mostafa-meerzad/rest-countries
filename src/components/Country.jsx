import CountryDataField from "./CountryDataField";
import {motion} from "framer-motion";

const Country = ({
  imgUrl,
  name,
  population,
  region,
  capital,
  commonName,
  subregion,
  currencies,
  languages,
  tld,
  borders,
  setCountry,
}) => {
  const handleClick = () => {
    // convert languages and currencies from object to arrays
    // so we can iterate over them and display them in the countryPreview component
    const languagesArr = [];
    const currenciesArr = [];

    for (let lang in languages) {
      languagesArr.push(languages[lang] + ",");
    }
    for (let currency in currencies) {
      currenciesArr.push(currencies[currency]);
    }
    setCountry({
      imgUrl,
      name,
      population,
      region,
      capital,
      commonName,
      subregion,
      currencies: currenciesArr,
      languages: languagesArr,
      tld,
      borders,
    });
  };
  return (
    <motion.div
      className="w-full flex flex-col pb-4 overflow-hidden border rounded-md shadow-lg font-Nunito md:pb-0 max-w-md max-md:mx-auto  dark:border-veryDarkBlueDarker dark:text-veryLightGray dark:bg-darkBlue cursor-pointer"
      onClick={handleClick}
      initial={{scale:1}}
      whileHover={{scale:1.05}}
    >
      <img
        src={imgUrl}
        alt={name}
        loading="lazy"
        className=" max-h-48 max-w-md object-cover shadow-sm lg:h-60 "
      />
      <div className="p-4">
        <h2 className="font-bold text-lg my-4">{name}</h2>
        <CountryDataField
          name="population"
          data={Number(population).toLocaleString()}
        />
        <CountryDataField name="region" data={region} />
        <CountryDataField name="capital" data={capital} />
      </div>
    </motion.div>
  );
};
export default Country;
