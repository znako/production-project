import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore } from './config/store'
import type { StateSchema } from './config/StateSchema'
import type { AppDispatch } from './config/store'

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type AppDispatch
}
