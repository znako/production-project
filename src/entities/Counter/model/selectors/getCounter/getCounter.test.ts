import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    test('should get counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
