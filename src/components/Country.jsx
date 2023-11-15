import CountryDataField from "./CountryDataField";

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
    <div
      className="w-full flex flex-col pb-4 overflow-hidden border rounded-md shadow-lg font-Nunito md:pb-0 dark:border-veryDarkBlueDarker dark:text-veryLightGray dark:bg-darkBlue cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={imgUrl}
        alt={name}
        loading="lazy"
        className="w-full h-40 object-contain"
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
    </div>
  );
};
export default Country;
