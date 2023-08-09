import { type CounterSchema } from 'entities/Counter'
import { type userSchema } from 'entities/User'

export interface StateSchema {
    counter: CounterSchema
    user: userSchema
}
