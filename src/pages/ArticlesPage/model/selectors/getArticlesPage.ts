import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleTypes, ArticleView } from "entities/Article";

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited

export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || 'asc'
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search || ''
export const getArticlesPageArticleType = (state: StateSchema) => state.articlesPage?.articleType || ArticleTypes.ALL
