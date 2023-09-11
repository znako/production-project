import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getArticlesPageLimit } from '../../selectors/getArticlesPage';

interface fetchArticlesPageProps {
    page: number
}

export const fetchArticlesPage = createAsyncThunk<
    Article[],
    fetchArticlesPageProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesPage',
        async ({page}, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const limit = getArticlesPageLimit(getState())

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
