import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleTypes, ArticleView } from "entities/Article/";
import {ArticleSortField} from 'entities/Article/index';
import { SortOrder } from "shared/types";

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