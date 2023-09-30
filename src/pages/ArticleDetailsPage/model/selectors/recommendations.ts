import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetails?.recommendations.isLoading
}

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetails?.recommendations.error
}
