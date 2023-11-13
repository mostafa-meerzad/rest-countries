const CountryField = ({ name, data }) => {
  return (
    <p className="text-veryDarkBlue font-semibold text-sm my-1 dark:text-veryLightGray">
      {name}: <span className="font-normal">{data}</span>
    </p>
  );
};

const Country = ({ imgUrl, name, population, region, capital }) => {
  return (
    <div className="w-full flex flex-col pb-4 overflow-hidden border rounded-md shadow-lg font-Nunito md:pb-0 dark:border-veryDarkBlueDarker dark:text-veryLightGray dark:bg-darkBlue">
      <img
        src={imgUrl}
        alt={name}
        loading="lazy"
        className="w-full h-56 object-contain"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg my-4">{name}</h2>
        <CountryField
          name="population"
          data={Number(population).toLocaleString()}
        />
        <CountryField name="region" data={region} />
        <CountryField name="capital" data={capital} />
      </div>
    </div>
  );
};
export default Country;
