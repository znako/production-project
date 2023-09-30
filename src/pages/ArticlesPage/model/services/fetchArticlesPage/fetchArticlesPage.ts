import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article, ArticleTypes } from 'entities/Article'
import { Comment } from 'entities/Comment'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { getArticlesPageArticleType, getArticlesPageLimit, getArticlesPageOrder, getArticlesPagePage, getArticlesPageSearch, getArticlesPageSort } from '../../selectors/getArticlesPage'

interface fetchArticlesPageProps {
    isReplace?: boolean
}

export const fetchArticlesPage = createAsyncThunk<
Article[],
fetchArticlesPageProps,
ThunkConfig<string>
>(
    'articlesPage/fetchArticlesPage',
    async ({ isReplace }, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi

        const limit = getArticlesPageLimit(getState())
        const page = getArticlesPagePage(getState())
        const order = getArticlesPageOrder(getState())
        const sortField = getArticlesPageSort(getState())
        const search = getArticlesPageSearch(getState())
        const articleType = getArticlesPageArticleType(getState())

        try {
            addQueryParams({
                order,
                sortField,
                search,
                articleType
            })

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: isReplace ? 1 : page,
                    _limit: limit,
                    _order: order,
                    _sort: sortField,
                    q: search,
                    type: articleType === ArticleTypes.ALL ? undefined : articleType
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
