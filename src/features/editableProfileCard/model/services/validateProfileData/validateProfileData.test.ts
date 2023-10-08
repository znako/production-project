import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { ValidateProfileEror } from '../../types/editableProfileCardSchema'
import { validateProfileData } from './validateProfileData'

const data = {
    id: '1',
    first: 'first',
    lastname: 'lastname',
    age: 123,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Korolev',
    username: 'znako',
    avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
}

describe('validateProfileData.test', () => {
    test('valid', () => {
        const errors: ValidateProfileEror[] = []

        expect(validateProfileData(data)).toEqual(errors)
    })

    test('INCORRECT_USER_DATA', async () => {
        const errors: ValidateProfileEror[] = [ValidateProfileEror.INCORRECT_USER_DATA]

        expect(validateProfileData({ ...data, first: '', username: '', lastname: '' })).toEqual(errors)
    })

    test('INCORRECT_AGE', async () => {
        const errors: ValidateProfileEror[] = [ValidateProfileEror.INCORRECT_AGE]

        expect(validateProfileData({ ...data, age: 0 })).toEqual(errors)
    })

    test('INCORRECT_USER_DATA, INCORRECT_AGE', async () => {
        const errors: ValidateProfileEror[] = [ValidateProfileEror.INCORRECT_USER_DATA, ValidateProfileEror.INCORRECT_AGE]

        expect(validateProfileData({})).toEqual(errors)
    })

    test('NO_DATA', async () => {
        const errors: ValidateProfileEror[] = [ValidateProfileEror.NO_DATA]

        expect(validateProfileData()).toEqual(errors)
    })
})
