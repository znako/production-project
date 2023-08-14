import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}

export type keyOfStateSchema = keyof StateSchema

export interface reducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: keyOfStateSchema, reducer: Reducer) => void
    remove: (key: keyOfStateSchema) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema>{
    reducerManager: reducerManagerType
}