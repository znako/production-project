import { counterReducer } from './model/slice/counterSlice'
import { Counter } from './ui/Counter'
import type { CounterSchema } from './model/types/CounterSchema'

export {
    Counter,
    counterReducer,
    type CounterSchema
}
