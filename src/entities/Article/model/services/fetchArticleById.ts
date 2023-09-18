import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../types/article'

export const fetchArticleById = createAsyncThunk<
Article,
string,
ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`, {
                params: {
                    _expand: 'user' 
                }
            })

            if (!response.data) {
                return rejectWithValue('error')
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
