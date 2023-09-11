import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited, getArticlesPageIsLoading} from '../../selectors/getArticlesPage';
import { ArticlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage';

export const fetchInitArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchInitArticles',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;

            const inited = getArticlesPageInited(getState())

            if (!inited) {
                dispatch(ArticlesPageActions.initState())
                dispatch(fetchArticlesPage({
                  page: 1
                }))
              }
        },
    );
