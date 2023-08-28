import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileEror } from '../../types/profile'
import { getProfileErrorsLift } from './getProfileErrorsList'

describe('getProfileErrorsList', () => {
    test('should return INCORRECT_USER_DATA, INCORRECT_AGE', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                errorsList: [
                    ValidateProfileEror.INCORRECT_USER_DATA,
                    ValidateProfileEror.INCORRECT_AGE
                ]
            }
        }
        expect(getProfileErrorsLift(state as StateSchema)).toEqual(['INCORRECT_USER_DATA', 'INCORRECT_AGE'])
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileErrorsLift(state as StateSchema)).toEqual(undefined)
    })
})
