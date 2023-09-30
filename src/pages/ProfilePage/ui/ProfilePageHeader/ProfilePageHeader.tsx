import { getProfileData, getProfileReadonly, profileActions } from 'entities/Profile'
import { updateProfileData } from 'entities/Profile/'
import { getUserAuthData } from 'entities/User'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className
    } = props

    const { t } = useTranslation('/profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const isEdit = authData?.id === profileData?.id

    const onClickEditBtn = useCallback(
        () => {
            dispatch(profileActions.onSetReadonly(false))
        },
        [dispatch]
    )

    const onClickCancelBtn = useCallback(
        () => {
            dispatch(profileActions.onCancelEdit())
        },
        [dispatch]
    )

    const onClickSaveBtn = useCallback(
        () => {
            dispatch(updateProfileData())
        },
        [dispatch]
    )

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {
                isEdit &&
                <>
                    {readonly
                        ? <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onClickEditBtn}
                        >
                            {t('Редактировать')}
                        </Button>
                        : <HStack gap='32'>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onClickCancelBtn}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onClickSaveBtn}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    }
                </>
            }

        </HStack>
    )
}
