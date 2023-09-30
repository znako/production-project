import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleTypes, type ArticleView } from 'entities/Article/'
import { type ArticleSortField } from 'entities/Article/index'
import { type SortOrder } from 'shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
    error?: string
    isLoading?: boolean

    // paginate
    page?: number
    limit: number
    hasMore?: boolean

    // filters
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    articleType: ArticleTypes

    _inited?: boolean
}
