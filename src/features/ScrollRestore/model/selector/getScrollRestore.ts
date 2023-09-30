import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ScrollRestoreSchema } from '../types/ScrollRestoreSchema'

const getScrollRestore = (state: StateSchema) => state.scrollRestore.scroll

export const getScrollRestoreByPath = createSelector(
    getScrollRestore,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)
