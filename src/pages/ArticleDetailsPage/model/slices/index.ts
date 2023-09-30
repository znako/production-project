import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'

export const articleDetailsReducers = combineReducers<ArticleDetailsSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer
})
