import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article'
import { AddCommentFormReducers } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage '

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleDetailsReducer,
    addCommentForm: AddCommentFormReducers,
    articleDetailsComments: articleDetailsCommentsReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
