import { MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="shadow-[0px_0px_72px_-27px_rgb(0,0,0)] shadow-gray-400 py-6">
      <div className="flex justify-between items-center w-11/12 mx-auto max-w-[1440px]">
        <h1 className="text-sm lg:text-2xl font-bold lg:font-black">
          Where in the world?
        </h1>
        <button className="capitalize text-sm lg:text-base">
          <MoonIcon className="w-5 inline-block" />
          &nbsp; dark mode
        </button>
      </div>
    </header>
  );
}
