import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import cls from './Navbar.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { DropDown } from 'shared/ui/DropDown/DropDown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    title={t('Habr 2.0')}
                    theme={TextTheme.INVERTED}
                    className={cls.appTitle}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <DropDown
                    items={[
                        {
                            content: t('Выйти'),
                            onClick: onLogout
                        },
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id
                        }
                    ]}
                    trigger={<Avatar src={authData.avatar} size={35}/>}
                    className={cls.dropDown}
                    direction={'bottom left'}
                />

            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                title={t('Habr 2.0')}
                theme={TextTheme.INVERTED}
                className={cls.appTitle}
            />
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    )
})
