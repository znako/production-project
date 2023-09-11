import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article/model/types/article";

export interface ArticlesPageSchema extends EntityState<Article> {
    error?: string
    isLoading?: boolean

    view: ArticleView
    // paginate
    page?: number
    limit?: number
    hasMore?: boolean

    _inited?: boolean
}