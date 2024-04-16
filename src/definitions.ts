type FlagsType = {
  svg: string;
  png: string;
};

type CurrenciesType = {
  code: string;
  name: string;
  symbol: string;
};

type LanguageType = {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
};

type TranslationType = {
  br?: string;
  pt?: string;
  nl?: string;
  hr?: string;
  fa?: string;
  de?: string;
  es?: string;
  fr?: string;
  ja?: string;
  it?: string;
  hu?: string;
};

type RegionalBlocType = {
  acronym: string;
  name: string;
};

export type CountryType = {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  flags?: FlagsType;
  currencies?: CurrenciesType[];
  languages?: LanguageType[];
  translations?: TranslationType;
  flag?: string;
  regionalBlocs?: RegionalBlocType[];
  cioc?: string;
  independent?: boolean;
};
