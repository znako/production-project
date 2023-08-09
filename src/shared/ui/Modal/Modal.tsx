import { useTheme } from 'app/providers/ThemeProvider'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

const ANIMATION_DELAY = 200

export interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    close?: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const [isClosed, setIsClosed] = useState(false)
    const [mounted, setMounted] = useState(false)
    const refTimer = useRef<ReturnType <typeof setTimeout>>()
    const { theme } = useTheme()

    const {
        className,
        children,
        isOpen,
        close,
        lazy
    } = props

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosed
    }

    const closeHandler = useCallback(() => {
        if (close) {
            setIsClosed(true)
            refTimer.current = setTimeout(() => {
                close()
                setIsClosed(false)
            }, ANIMATION_DELAY)
        }
    }, [close])

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const closeEsc = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', closeEsc)
        }

        return () => {
            clearTimeout(refTimer.current)
            window.removeEventListener('keydown', closeEsc)
        }
    }, [isOpen, closeEsc])

    useEffect(() => {
        if (isOpen) {
            setMounted(true)
        }
    }, [isOpen])

    if (lazy && !mounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
