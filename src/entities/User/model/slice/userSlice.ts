import { createSlice } from '@reduxjs/toolkit'
import { type userSchema } from '../types/user'

const initialState: userSchema = {}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

export const { actions: userActions } = user
export const { reducer: userReducer } = user
