import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
// import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isModal, setIsModal] = useState(false)
    const { t } = useTranslation()

    const toggleModal = useCallback(() => {
        setIsModal(prev => !prev)
    }, [setIsModal])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isModal} close={toggleModal} />
        </div>
    )
}
