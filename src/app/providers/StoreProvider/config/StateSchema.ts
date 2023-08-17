import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type keyOfStateSchema = keyof StateSchema

export interface reducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: keyOfStateSchema, reducer: Reducer) => void
    remove: (key: keyOfStateSchema) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManagerType
}
