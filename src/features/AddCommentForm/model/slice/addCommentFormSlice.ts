import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/AddCommentFormSchema'

const initialState: AddCommentFormSchema = {
    text: ''
}

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: AddCommentFormActions } = AddCommentFormSlice
export const { reducer: AddCommentFormReducers } = AddCommentFormSlice
