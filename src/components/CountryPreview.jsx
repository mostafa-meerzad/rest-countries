import Arrow from "./icon-components/Arrow";
import CountryDataField from "./CountryDataField";
import { motion } from "framer-motion";

const CountryPreview = ({
  imgUrl,
  name,
  commonName,
  currencies,
  languages,
  tld,
  borders,
  region,
  subregion,
  capital,
  population,
  handleCountryReset,
}) => {
  // couldn't think any better way of showing this much different data, but to construct the preview component fields manually
  return (
    <motion.div
      className="grid  w-full max-lg:max-w-lg mx-auto sticky  top-0 left-0 px-6 bg-veryLightGray dark:bg-veryDarkBlueDarker text-veryDarkBlue dark:text-veryLightGray lg:px-12 py-8 z-10 
      lg:gap-x-12  lg:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        className="flex items-center justify-center gap-2 px-4 py-0.5 w-24 rounded-sm bg-veryLightGray dark:bg-darkBlue hover:bg-veryLightGray hover:outline outline-1 outline-gray-400 dark:hover:bg-veryDarkBlueDarker dark:text-veryLightGray shadow-md lg:row-start-1 lg:row-end-2 lg:mb-16
         "
        onClick={handleCountryReset}
      >
        <Arrow className="w-3 fill-veryDarkBlue dark:fill-veryLightGray " />
        Back
      </button>

      <img
        src={imgUrl}
        alt=""
        className=" max-lg:object-cover w-full h-52 my-8  shadow-md lg:h-72 lg:max-w-xl lg:my-0 lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-end-5 "
      />

      <h2 className="font-bold capitalize text-xl lg:col-start-3 lg:col-span-2 lg:row-start-2">
        {name}
      </h2>
      <br />

      <div className=" lg:row-start-3 lg:col-start-3">
        <CountryDataField name={"common name"} data={commonName} />
        <CountryDataField
          name={"population"}
          data={population.toLocaleString()}
        />
        <CountryDataField name={"region"} data={region} />
        <CountryDataField name={"subregion"} data={subregion} />
        <CountryDataField name={"capital"} data={capital} />
      </div>

      <br />
      <div className=" lg:row-start-3 lg:col-start-4">
        <CountryDataField
          name={"top level domain"}
          data={tld}
          className={"lg:col-start-3 lg:col-end-4"}
        />
        <p className=" font-semibold capitalize text-sm my-1 flex gap-1 ">
          currencies:
          {currencies?.map(({ name: currency }) => (
            <span
              key={currency}
              className="font-normal text-veryDarkBlueDarker dark:text-gray-300"
            >
              {currency}
            </span>
          ))}
        </p>
        <p className=" font-semibold capitalize text-sm my-1 flex gap-1 lg:col-start-3 lg:col-end-4">
          languages:
          {languages?.map((lang) => (
            <span
              key={lang}
              className="font-normal text-veryDarkBlueDarker dark:text-gray-300 after:content-[test]"
            >
              {lang}
            </span>
          ))}
        </p>
      </div>
      <br />
      <div className="lg:flex lg:justify-start lg:items-center lg:gap-4 lg:row-start-4 lg:col-start-3 lg:col-span-2">
        <h3 className="text-lg capitalize w-48">border countries:</h3>

        <ul className="grid grid-flow-rows grid-cols-4 gap-4 w-full my-4 lg:col-start-3 lg:col-span-2">
          {borders?.map((border) => {
            return (
              <li
                key={border}
                className="flex items-center justify-center px-7 py-2 text-xs bg-veryLightGray dark:bg-darkBlue text-veryDarkBlueDarker border dark:border-none dark:text-veryLightGray shadow-md"
              >
                {border}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};
export default CountryPreview;
