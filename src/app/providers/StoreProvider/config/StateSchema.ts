import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import {
    type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject
} from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type To } from 'history'
import { type NavigateOptions } from 'react-router'
import { ArticleSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage '
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { ScrollRestoreSchema } from 'features/ScrollRestore'

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollRestore: ScrollRestoreSchema

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalMountedReducers<StateSchemaKey, boolean> 
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true если вмонтирован
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
