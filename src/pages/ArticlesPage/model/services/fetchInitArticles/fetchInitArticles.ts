import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleTypes } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited, getArticlesPageIsLoading} from '../../selectors/getArticlesPage';
import { ArticlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage';

export const fetchInitArticles = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/fetchInitArticles',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;

            const inited = getArticlesPageInited(getState())

            const order = searchParams.get('order') as SortOrder
            const sortField = searchParams.get('sortField') as ArticleSortField
            const search = searchParams.get('search')
            const articleType = searchParams.get('articleType')

            if (order) {
              dispatch(ArticlesPageActions.setOrder(order))
            }
            if (sortField) {
              dispatch(ArticlesPageActions.setSort(sortField))
            }
            if (search) {
              dispatch(ArticlesPageActions.setSearch(search))
            }
            if (articleType) {
              dispatch(ArticlesPageActions.setType(articleType as ArticleTypes))
            }

            if (!inited) {
                dispatch(ArticlesPageActions.initState())
                dispatch(fetchArticlesPage({}))
              }
        },
    );
