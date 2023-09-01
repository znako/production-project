import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById'
import { Article } from '../types/article'
import { ArticleSchema } from '../types/articleSchema'

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const ArticleDetailsSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>
            ) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = ArticleDetailsSlice
export const { reducer: articleDetailsReducer } = ArticleDetailsSlice
