import {
    createEntityAdapter, createSlice, PayloadAction
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
  
const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
  })
  
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)
  
  const initialState = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {}
  })
  
const ArticleDetailsCommentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
  })
  
export const {reducer: articleDetailsCommentsReducer} = ArticleDetailsCommentsSlice