import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer } from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/CurrencySelect'
import { type Country } from 'entities/CountrySelect'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onEditName = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ first: value || '' }))
        },
        [dispatch]
    )

    const onEditLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ lastname: value || '' }))
        },
        [dispatch]
    )
    const onEditAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ age: Number(value?.replace(/\D/gm, '') || 0) }))
        },
        [dispatch]
    )

    const onEditCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ city: value || '' }))
        },
        [dispatch]
    )

    const onEditUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ username: value || '' }))
        },
        [dispatch]
    )

    const onEditAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.onUpdateProfile({ avatar: value || '' }))
        },
        [dispatch]
    )

    const onEditCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.onUpdateProfile({ currency }))
        },
        [dispatch]
    )

    const onEditCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.onUpdateProfile({ country }))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    form={form}
                    isLoading={isLoading}
                    error={error}
                    onEditName={onEditName}
                    onEditLastname={onEditLastname}
                    readonly={readonly}
                    onEditAge={onEditAge}
                    onEditCity={onEditCity}
                    onEditUsername={onEditUsername}
                    onEditAvatar={onEditAvatar}
                    onEditCurrency={onEditCurrency}
                    onEditCountry={onEditCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
