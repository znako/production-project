import { StateSchema } from "app/providers/StoreProvider"
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from "./getLoginData"


describe('getLoginTest', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toBe('error')
    })

    test('should work empty state error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toBe(undefined)
    })

    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return value password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123123')
    })
    test('should work with empty state password', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })

    test('should return value username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123123')
    })
    test('should work with empty state username', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
