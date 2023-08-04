import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
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
            { /* eslint-disable-next-line i18next/no-literal-string */ }
            <Modal isOpen={isModal} close={toggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt reiciendis aliquid. Molestiae quod labore, neque provident veritatis esse vero, voluptatem velit explicabo, porro reprehenderit asperiores aspernatur ad natus quasi.
            </Modal>
        </div>
    )
}
