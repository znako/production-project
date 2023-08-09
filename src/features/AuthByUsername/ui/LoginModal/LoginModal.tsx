import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    close: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        close
    } = props

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            className={classNames(cls.LoginForm, {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    )
}
