import { type Currency } from 'entities/CurrencySelect'
import { type Country } from 'entities/CountrySelect'

export interface Profile {
    id?: string
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}
