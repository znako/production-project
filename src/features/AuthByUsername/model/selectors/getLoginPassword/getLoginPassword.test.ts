import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toBe('1234')
    })

    test('should work empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toBe('')
    })
})
