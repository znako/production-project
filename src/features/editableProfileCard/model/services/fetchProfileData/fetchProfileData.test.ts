import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

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

describe('fetchProfileData.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ result: 403 }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})
