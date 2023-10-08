import { Country } from 'entities/CountrySelect'
import { Currency } from 'entities/CurrencySelect'
import { ValidateProfileEror, type ProfileSchema } from '../types/editableProfileCardSchema'
import { profileActions, profileReducer } from './profileSlice'

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

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        }

        expect(profileReducer(state as ProfileSchema, profileActions.onSetReadonly(true))).toEqual({ readonly: true })
    })

    test('onUpdateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data
        }

        expect(profileReducer(state as ProfileSchema, profileActions.onUpdateProfile({ first: 'Artemiy' }))).toEqual({ form: { ...data, first: 'Artemiy' } })
    })

    test('onCancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            readonly: false,
            form: { ...data, first: '' },
            errorsList: [ValidateProfileEror.INCORRECT_AGE]
        }

        expect(profileReducer(state as ProfileSchema, profileActions.onCancelEdit())).toEqual({
            data,
            readonly: true,
            form: data,
            errorsList: undefined

        })
    })
})
