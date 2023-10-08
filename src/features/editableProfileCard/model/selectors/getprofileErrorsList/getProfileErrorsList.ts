import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileErrorsList = (state: StateSchema) => state.profile?.errorsList
