import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPagePage } from '../../selectors/getArticlesPage';
import { ArticlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage';

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticles',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState, dispatch } = thunkApi;

            const limit = getArticlesPageLimit(getState())
            const page = getArticlesPagePage(getState())
            const hasMore = getArticlesPageHasMore(getState())
            const isLoading = getArticlesPageIsLoading(getState())

            if (hasMore && !isLoading){
                dispatch(ArticlesPageActions.setPage(page + 1))
                dispatch(fetchArticlesPage({page: page + 1}))
            }
        },
    );
