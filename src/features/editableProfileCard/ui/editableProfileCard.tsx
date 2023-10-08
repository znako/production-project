import { type Country } from 'entities/CountrySelect'
import { type Currency } from 'entities/CurrencySelect'
import { ProfileCard } from 'entities/Profile'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getProfileErrorsList } from '..'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { ValidateProfileEror } from '../model/types/editableProfileCardSchema'

const reducers: ReducersList = {
    profile: profileReducer
}

interface EditableProfileCardProps {
    className?: string
    id?: string
}

export const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation('/profile')
    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const errors = useSelector(getProfileErrorsList)
    const dispatch = useAppDispatch()

    if (id) {
        useInitialEffect(
            async () => await dispatch(fetchProfileData(id))
        )
    }

    const ValidateProfileErrorsTranslate: Record<ValidateProfileEror, string> = {
        [ValidateProfileEror.INCORRECT_USER_DATA]: t('Поля имя, фамилия и username не должны быть пустыми!'),
        [ValidateProfileEror.NO_DATA]: t('Нет данных!'),
        [ValidateProfileEror.INCORRECT_AGE]: t('Неверно указан возраст!'),
        [ValidateProfileEror.SERVER_ERROR]: t('Ошибка сервера! Попробуйте еще раз.')
    }

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
            {
                errors?.length &&
                    errors.map(err =>
                        <Text
                            theme={TextTheme.ERROR}
                            text={ValidateProfileErrorsTranslate[err]}
                            key={err}
                        />)
            }
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
        </DynamicModuleLoader>
    )
}
