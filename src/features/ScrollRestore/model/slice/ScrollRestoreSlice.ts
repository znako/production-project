import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollRestoreSchema } from '../types/ScrollRestoreSchema'

const initialState: ScrollRestoreSchema = {
    scroll: {}
}

export const ScrollRestoreSlice = createSlice({
    name: 'scrollRestore',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: scrollRestoreActions } = ScrollRestoreSlice
export const { reducer: scrollRestoreReducer } = ScrollRestoreSlice
