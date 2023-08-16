import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
    test('should set username ', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234')))
    })
    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234')))
    })
})
