import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileSchema } from '../types/editableProfileCardSchema'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        onSetReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },

        onUpdateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        },

        onCancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.errorsList = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.errorsList = undefined
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.readonly = true
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.errorsList = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.errorsList = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
