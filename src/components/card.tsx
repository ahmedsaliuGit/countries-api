type CardPropsType = {
  imgSrc: string | undefined;
  altText: string | undefined;
  name: string | undefined;
  populations: number;
  region: string | undefined;
  capital: string | undefined;
};

export default function Card({
  imgSrc,
  altText,
  name,
  populations,
  region,
  capital,
}: CardPropsType) {
  return (
    <div className="rounded-lg bg-white">
      <img
        src={imgSrc}
        alt={altText}
        className="rounded-t-lg object-fill w-80 lg:w-96 h-48"
      />
      <div className="p-5 pb-10 md:w-80 lg:w-72">
        <h3 className="text-base lg:text-xl font-semibold lg:font-extrabold my-4 truncate">
          {name}
        </h3>
        <ul>
          <li>
            <span className="text-base lg:text-lg font-medium lg:font-semibold">
              Populations:{" "}
            </span>{" "}
            <span className="font-light">
              {new Intl.NumberFormat().format(populations)}
            </span>
          </li>
          <li>
            <span className="text-base lg:text-lg font-medium lg:font-semibold">
              Region:{" "}
            </span>{" "}
            <span className="font-light">{region}</span>
          </li>
          <li>
            <span className="text-base lg:text-lg font-medium lg:font-semibold">
              Capital:{" "}
            </span>{" "}
            <span className="font-light">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
