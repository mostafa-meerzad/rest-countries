const CountryDataField = ({ name, data, className}) => {
  return (
    <p className={`flex gap-1 font-semibold capitalize text-sm my-1 ${className}`}>
      {name}:
      <span className="font-normal text-veryDarkBlueDarker dark:text-gray-300">
        {data}
      </span>
    </p>
  );
};

export default CountryDataField;
