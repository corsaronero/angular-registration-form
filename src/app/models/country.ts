

export interface ICountry {
    name?: string;
    topLevelDomain?: [];
    alpha2Code?: string;
    alpha3Code?: string;
    callingCodes?: [];
    capital?: string;
    altSpellings?: [];
    region?: string;
    subregion?: string;
    population?: number;
    latlng?: [];
    demonym?: string;
    area?: number;
    gini?: number;
    timezones?: [];
    borders?: [];
    nativeName?: string;
    numericCode?: string;
    currencies?: ICurrencies [];
    languages?: ILanguages [];
    translations?: string;
    flag?: string;
    regionalBlocs?: IRegionalBlocs [],
    cioc: string;
}

export interface ICurrencies {
    code?: string;
    name?: string;
    symbol?: string;
}

export interface ILanguages {
    iso639_1?: string;
    iso639_2?: string;
    name?: string;
    nativeName?: string;
}

export interface IRegionalBlocs {
    acronym?: string;
    name?: string;
    otherAcronyms?: [];
    otherNames?: [];
}