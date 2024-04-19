import { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Card from "./card";
import { CountryType } from "../definitions";
import Main from "./main";

type MainPropsType = {
  countries: CountryType[];
  setDetail: (val: string) => void;
};

type SearchParamType = {
  capital: string;
  name: string;
  population: number;
  region: string;
};

const regions = ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"];

export default function Home({ countries, setDetail }: MainPropsType) {
  const [query, setQuery] = useState("");
  const [searchParams] = useState<Array<string>>([
    "capital",
    "name",
    "population",
    "region",
  ]);
  const [open, setOpen] = useState(false);
  const [filterParam, setFilterParam] = useState("All");

  const search = (items: CountryType[]) => {
    return items.filter((item) => {
      if (item.region === filterParam) {
        return searchParams.some((newItem) => {
          if (!item.hasOwnProperty(newItem)) return false;

          return (
            // @ts-ignore
            item[newItem as keyof SearchParamType]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParams.some((newItem) => {
          if (!item.hasOwnProperty(newItem)) return false;

          return (
            // @ts-ignore
            item[newItem as keyof SearchParamType]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  };

  const handleClick = (region: string) => {
    setFilterParam(region);

    setOpen(false);
  };

  return (
    <Main>
      <div className="py-8 w-11/12 mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className="w-full bg-white dark:bg-darkGrayLightInput py-3 pl-8 pr-3 rounded-md flex justify-start items-center shadow-inner lg:basis-[500px] lg:py-5 focus:border-[2px] focus:border-gray-400 transition-colors duration-500 ease-in-out">
            <MagnifyingGlassIcon className="w-5 text-gray-400 dark:text-gray-200" />
            <input
              type="search"
              id="query"
              className="ml-5 text-sm lg:text-base w-full outline-none dark:bg-darkGrayLightInput transition-colors duration-500 ease-in-out dark:placeholder:text-gray-200"
              placeholder="Search for a country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="relative w-2/3 md:max-w-[330px] lg:max-w-[250px]">
            <button
              className="bg-white dark:bg-darkGrayLightInput transition-colors duration-500 ease-in-out py-3 lg:py-5 pl-6 pr-5 text-sm lg:text-base text-gray-400 dark:text-gray-200 rounded-md flex justify-between items-center w-full"
              onClick={() => setOpen(!open)}
            >
              {filterParam === "All" ? (
                <span>Filter by Region</span>
              ) : (
                <span>{filterParam}</span>
              )}
              <ChevronDownIcon className="w-3 lg:w-5" />
            </button>

            <ul
              className={`absolute z-10 mt-2 ${
                open ? "" : "collapse"
              } max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-darkGrayLightInput transition-colors duration-500 ease-in-out`}
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              {regions.map((region, index) => (
                <li
                  key={index}
                  className="text-gray-900 dark:text-gray-200 relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-darkGrayLightInput dark:hover:bg-vDarkGrayLightBg dark:hover:text-darkGrayLightInput"
                  id={`listbox-option-${index}`}
                  role="option"
                  aria-selected={filterParam === region ? true : false}
                  onClick={() => handleClick(region)}
                >
                  <span>{region}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Cards area */}
        <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {search(countries).map((country) => (
            <a
              href="#"
              key={country.name}
              onClick={() => setDetail(country.id)}
            >
              <Card
                imgSrc={country.flag}
                altText={country.name}
                name={country.name}
                populations={country.population}
                region={country.region}
                capital={country.capital}
              />
            </a>
          ))}
        </div>
      </div>
    </Main>
  );
}
