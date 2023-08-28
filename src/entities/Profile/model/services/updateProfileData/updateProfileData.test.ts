import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileEror } from '../../types/profile'
import { updateProfileData } from './updateProfileData'

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
    test('success update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('SERVER_ERROR', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileEror.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, first: '' } } })
        const result = await thunk.callThunk()

        expect(result.payload).toEqual([ValidateProfileEror.INCORRECT_USER_DATA])
    })
})
