import { MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="shadow-md shadow-vDarkGrayLightBg py-6">
      <div className="flex justify-between items-center w-11/12 mx-auto 2xl:max-w-[1440px]">
        <h1 className="text-sm font-bold">Where in the world?</h1>
        <button className="capitalize text-sm">
          <MoonIcon className="w-5 inline-block" />
          &nbsp; dark mode
        </button>
      </div>
    </header>
  );
}
