import {
    createEntityAdapter, createSlice, PayloadAction
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { fetchArticlesPage } from '../services/fetchArticlesPage/fetchArticlesPage'
import { ArticlesPageSchema } from '../types/ArticlesPageSchema'
  
const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
  })
  
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)
  
  const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
    error: undefined,
    isLoading: false,
    view: ArticleView.SMALL,
    ids: [],
    entities: {},
    page: 1,
    limit: 9,
    hasMore: true,
    _inited: false
  })
  
const ArticlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
            state.limit = action.payload === ArticleView.SMALL ? 9 : 4
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },

        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.SMALL ? 9 : 4
            state._inited = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPage.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesPage.fulfilled, (
                state,
                action: PayloadAction<Article[]>
            ) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesPage.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
  })
  
export const {reducer: ArticlesPageReducer} = ArticlesPageSlice
export const {actions: ArticlesPageActions} = ArticlesPageSlice