import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileErrorsLift } from './model/selectors/getprofileErrorsList/getProfileErrorsList'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'

export {
    type Profile,
    type ProfileSchema,
    ValidateProfileEror
} from './model/types/profile'

export {
    profileActions,
    profileReducer
} from './model/slice/profileSlice'

export {
    fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData'

export {
    updateProfileData
} from './model/services/updateProfileData/updateProfileData'

export {
    ProfileCard
} from './ui/ProfileCard/ProfileCard'

export {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm,
    getProfileErrorsLift
}
