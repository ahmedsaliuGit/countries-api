import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <header className="shadow-[0px_0px_72px_-27px_rgb(0,0,0)] dark:shadow-[0px_0px_100px_50px_rgb(24,22,22)] py-6 bg-white dark:bg-darkBlue transition-colors duration-500 ease-in-out">
      <div className="flex justify-between items-center w-11/12 mx-auto max-w-[1440px]">
        <h1 className="text-sm lg:text-2xl font-bold lg:font-black text-black dark:text-white">
          Where in the world?
        </h1>
        <ThemeSwitch />
      </div>
    </header>
  );
}
