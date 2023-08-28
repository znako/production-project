import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { getProfileForm } from './getProfileForm'

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

describe('getProfileForm', () => {
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
