import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import {
    type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject
} from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'

import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type ScrollRestoreSchema } from 'features/ScrollRestore'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/'
import { type rtkApi } from 'shared/api/rtkApi'
import { type ProfileSchema } from 'features/editableProfileCard'

export interface StateSchema {
    user: UserSchema;
    scrollRestore: ScrollRestoreSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
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
