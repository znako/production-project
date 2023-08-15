import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginError } from "./getLoginError"

describe('getLoginTestError', () => { 
    test('should return error', () => { 
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toBe('error')
     })

    test('should work empty state', () => { 
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toBe(undefined)
    })
})