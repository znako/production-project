import { Reducer } from '@reduxjs/toolkit'
import { keyOfStateSchema, StoreWithReducerManager } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [key in keyOfStateSchema]?: Reducer 
}

type EntriesType = [keyOfStateSchema, Reducer]

export interface AsyncReducersLoaderProps {
    reducers: ReducersList
    removeAfterUnMount?: boolean
}


export const AsyncReducersLoader: FC<AsyncReducersLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnMount
    } = props

    const dispatch = useDispatch()
    const store = useStore() as StoreWithReducerManager

    useEffect(() => {
        Object.entries(reducers).forEach(([actionType, reducer]: EntriesType) => {
            store.reducerManager.add(actionType, reducer)
            dispatch({type: `@INIT ${actionType} reducer`})
        })
        
        return () => {
            if (removeAfterUnMount) {
                Object.entries(reducers).forEach(([actionType, _]: EntriesType) => {
                    store.reducerManager.remove(actionType)
                    dispatch({type: `@DESTROY ${actionType} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
