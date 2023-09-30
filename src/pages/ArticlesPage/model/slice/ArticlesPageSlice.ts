import {
    createEntityAdapter, createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article, ArticleSortField, ArticleTypes, ArticleView } from 'entities/Article'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type SortOrder } from 'shared/types'
import { fetchArticlesPage } from '../services/fetchArticlesPage/fetchArticlesPage'
import { type ArticlesPageSchema } from '../types/ArticlesPageSchema'

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
    order: 'asc',
    sort: ArticleSortField.CREATED,
    search: '',
    articleType: ArticleTypes.ALL,
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

        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },

        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },

        setType: (state, action: PayloadAction<ArticleTypes>) => {
            state.articleType = action.payload
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
            .addCase(fetchArticlesPage.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true

                if (action.meta.arg.isReplace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesPage.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit

                if (action.meta.arg.isReplace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticlesPage.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: ArticlesPageReducer } = ArticlesPageSlice
export const { actions: ArticlesPageActions } = ArticlesPageSlice
