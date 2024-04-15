import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Card from "./card";

export default function Main() {
  return (
    <main className="bg-vDarkGrayLightBg">
      <div className="py-8 w-11/12 mx-auto 2xl:max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-4">
          <div className="w-full bg-white py-3 pl-8 pr-3 rounded-md flex justify-start items-center shadow-inner">
            <MagnifyingGlassIcon className="w-5 text-gray-400" />
            <input
              type="text"
              className="ml-5 text-sm w-full"
              placeholder="Search for a country..."
            />
          </div>
          <button className="bg-white w-2/3 py-3 pl-6 pr-5 text-sm rounded-md flex justify-between items-center">
            Filter by Region
            <ChevronDownIcon className="w-3" />
          </button>
        </div>
        {/* Cards area */}
        <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2">
          <Card
            imgSrc="https://flagcdn.com/w320/de.png"
            altText="Federal Republic of Germany"
            name="Germany"
            populations="81, 770, 900"
            region="Europe"
            capital="Berlin"
          />
          <Card
            imgSrc="https://flagcdn.com/w320/de.png"
            altText="Federal Republic of Germany"
            name="Germany"
            populations="81, 770, 900"
            region="Europe"
            capital="Berlin"
          />
        </div>
      </div>
    </main>
  );
}
