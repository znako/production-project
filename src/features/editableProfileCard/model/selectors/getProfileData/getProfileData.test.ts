import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { getProfileData } from './getProfileData'

const data = {
    first: 'first',
    lastname: 'lastname',
    age: 123,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Korolev',
    username: 'znako',
    avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
}

describe('getProfileData', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
