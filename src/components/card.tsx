type CardPropsType = {
  imgSrc: string;
  altText: string;
  name: string;
  populations: string;
  region: string;
  capital: string;
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
      <img src={imgSrc} alt={altText} className="rounded-t-lg" />
      <div className="p-5 pb-10">
        <h3 className="text-base font-semibold my-4">{name}</h3>
        <ul>
          <li>
            <span className="text-base font-medium">Populations: </span>{" "}
            <span className="font-light">{populations}</span>
          </li>
          <li>
            <span className="text-base font-medium">Region: </span>{" "}
            <span className="font-light">{region}</span>
          </li>
          <li>
            <span className="text-base font-medium">Capital: </span>{" "}
            <span className="font-light">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
