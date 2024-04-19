import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Main from "./main";
import { CountryType } from "../definitions";

type DetailPropsType = {
  index: string;
  setDetail: (val: string) => void;
  countries: CountryType[];
};

export default function Detail({
  index,
  setDetail,
  countries,
}: DetailPropsType) {
  const country = countries.find((country) => country.id === index);

  if (country === undefined) return null;

  return (
    <Main>
      <div className="py-8 px-2 w-11/12 mx-auto max-w-[1440px]">
        <button
          className="py-2 px-5 md:px-8 flex justify-between items-center rounded-sm shadow-[0px_0px_27px_-11px_rgba(0,0,0,0.75)] mb-16 text-sm md:text-base font-light dark:bg-darkBlue transition-colors duration-500 ease-in-out dark:text-white"
          onClick={() => setDetail("-1")}
        >
          <ArrowLongLeftIcon className="w-5 mr-4" />
          <span>Back</span>
        </button>

        <div className="mb-4 lg:flex lg:justify-between lg:items-center lg:gap-10">
          <div className="mb-10 lg:basis-[650px] lg:mb-0">
            <img
              src={country.flag}
              className="h-52 w-full lg:h-[350px]"
              alt={country.name}
            />
          </div>
          <div className="dark:text-white transition-colors duration-500 ease-in-out">
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-lg lg:text-2xl font-bold mb-8">
                  {country.name}
                </h3>

                <ul>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Native Name:
                    </span>
                    <span className="font-light"> {country.nativeName}</span>
                  </li>
                  <li className="mb-2">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Population:{" "}
                    </span>
                    <span className="font-light">
                      {new Intl.NumberFormat().format(country.population)}
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Region:
                    </span>
                    <span className="font-light"> {country.region}</span>
                  </li>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Sub region:
                    </span>
                    <span className="font-light"> {country.subregion}</span>
                  </li>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      capital:{" "}
                    </span>
                    <span className="font-light">{country.capital}</span>
                  </li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-0">
                <ul>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Top level domain:{" "}
                    </span>
                    <span className="font-light">{country.topLevelDomain}</span>
                  </li>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Currencies:{" "}
                    </span>
                    <span className="font-light">
                      {country.currencies[0].name}
                    </span>
                  </li>
                  <li className="mb-2 capitalize">
                    <span className="text-base lg:text-lg font-medium lg:font-semibold">
                      Languages:{" "}
                    </span>
                    <span className="font-light">
                      {country?.languages.map(
                        (language, index) =>
                          `${language.name}${
                            index !== country.languages.length - 1 ? ", " : ""
                          }`
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex md:justify-start md:items-center">
              <h3 className="text-base font-medium capitalize mb-4 md:mb-0 md:mr-4">
                border countries:{" "}
              </h3>
              <ul className="grid grid-cols-4 gap-2 md:grid-cols-10">
                {country.borders.map((border) => (
                  <li
                    key={border}
                    className="shadow-[0px_0px_10px_-5px_rgba(0,0,0,0.75)] bg-white place-content-center text-center text-sm capitalize p-1 rounded-sm dark:bg-darkBlue"
                  >
                    {border}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
