import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileErrorsLift = (state: StateSchema) => state.profile?.errorsList
