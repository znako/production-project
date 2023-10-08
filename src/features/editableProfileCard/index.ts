import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileErrorsList } from './model/selectors/getprofileErrorsList/getProfileErrorsList'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from './model/services/updateProfileData/updateProfileData'
import { profileReducer, profileActions } from './model/slice/profileSlice'
import { type ProfileSchema } from './model/types/editableProfileCardSchema'

export type {
    ProfileSchema
}
export {
    profileReducer,
    profileActions
}

export {
    getProfileData,
    getProfileError,
    getProfileErrorsList,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly
}

export {
    updateProfileData
}
