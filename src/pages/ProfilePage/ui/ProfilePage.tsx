import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, getProfileError, getProfileErrorsLift, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer, ValidateProfileEror } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/CurrencySelect'
import { type Country } from 'entities/CountrySelect'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('/profile')

    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const errors = useSelector(getProfileErrorsLift)
    const { id } = useParams<{ id: string }>()

    const ValidateProfileErrorsTranslate: Record<ValidateProfileEror, string> = {
        [ValidateProfileEror.INCORRECT_USER_DATA]: t('Поля имя, фамилия и username не должны быть пустыми!'),
        [ValidateProfileEror.NO_DATA]: t('Нет данных!'),
        [ValidateProfileEror.INCORRECT_AGE]: t('Неверно указан возраст!'),
        [ValidateProfileEror.SERVER_ERROR]: t('Ошибка сервера! Попробуйте еще раз.')
    }

    const dispatch = useAppDispatch()

    if (id) {
        useInitialEffect(
            async () => await dispatch(fetchProfileData(id))
        )
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
            <Page className={classNames('', {}, [className])}>
                <VStack gap='16' max>
                    <ProfilePageHeader />
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
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
