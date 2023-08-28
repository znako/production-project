import { type Currency } from 'entities/CurrencySelect'
import { type Country } from 'entities/CountrySelect'

export enum ValidateProfileEror {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA'
}

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    errorsList?: ValidateProfileEror[]
}
