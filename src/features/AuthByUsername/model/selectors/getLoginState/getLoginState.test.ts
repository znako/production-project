import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('getLoginState', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234',
                username: 'admin',
                isLoading: true
            }
        }
        expect(getLoginState(state as StateSchema)).toEqual({
            password: '1234',
            username: 'admin',
            isLoading: true
        })
    })

    test('should work empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})
