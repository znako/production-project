import { type Profile } from 'entities/Profile'
import { ValidateProfileEror } from '../../types/editableProfileCardSchema'

export const validateProfileData = (form?: Profile): ValidateProfileEror[] => {
    if (!form) {
        return [ValidateProfileEror.NO_DATA]
    }
    const {
        first,
        lastname,
        age,
        username
    } = form

    const errors: ValidateProfileEror[] = []

    if (!first || !lastname || !username) {
        errors.push(ValidateProfileEror.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileEror.INCORRECT_AGE)
    }

    return errors
}
