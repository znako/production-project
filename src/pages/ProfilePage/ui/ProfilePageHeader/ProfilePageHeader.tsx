import { getProfileReadonly, profileActions } from 'entities/Profile'
import { updateProfileData } from 'entities/Profile/'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import cls from './ProfilePageHeader.module.scss'

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onClickEditBtn}
                >
                    {t('Редактировать')}
                </Button>
                : <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onClickCancelBtn}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onClickSaveBtn}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            }
        </div>
    )
}
