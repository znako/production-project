import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { keyOfStateSchema, reducerManagerType, StateSchema } from "./StateSchema"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): reducerManagerType {
    const reducers = { ...initialReducers }
  
    let combinedReducer = combineReducers(reducers)
  
    let keysToRemove: Array<keyOfStateSchema> = []
  
    return {
      getReducerMap: () => reducers,
  
      reduce: (state: StateSchema, action: AnyAction) => {
        if (keysToRemove.length > 0) {
          state = { ...state }
          for (let key of keysToRemove) {
            delete state[key]
          }
          keysToRemove = []
        }
  
        return combinedReducer(state, action)
      },
  
      add: (key: keyOfStateSchema, reducer: Reducer) => {
        if (!key || reducers[key]) {
          return
        }
  
        reducers[key] = reducer
  
        combinedReducer = combineReducers(reducers)
      },
  
      remove: (key: keyOfStateSchema) => {
        if (!key || !reducers[key]) {
          return
        }
        delete reducers[key]
        keysToRemove.push(key)
        combinedReducer = combineReducers(reducers)
      }
    }
  }