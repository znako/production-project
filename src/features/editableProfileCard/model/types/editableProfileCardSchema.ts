import { type Profile } from 'entities/Profile'

export enum ValidateProfileEror {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    errorsList?: ValidateProfileEror[]
}
