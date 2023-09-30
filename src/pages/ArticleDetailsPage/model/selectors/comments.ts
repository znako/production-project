import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetails?.comments.isLoading
}

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetails?.comments.error
}
