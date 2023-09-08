import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

export const sendCommentForm = createAsyncThunk<
    Comment,
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/sendCommentForm',
        async (text, thunkApi) => {
            const { extra, rejectWithValue, getState, dispatch } = thunkApi;

            const user = getUserAuthData(getState())
            const article = getArticleData(getState())
            
            if (!text || !user || !article) {
                return rejectWithValue('no data')
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: user.id,
                    text
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id))

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
