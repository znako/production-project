import { getUserInited } from './model/selectors/getUserInited/getUserInited'

export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData'

export {getUserInited}

export {
    userReducer,
    userActions
} from './model/slice/userSlice'
export type {
    UserSchema,
    User
} from './model/types/user'
