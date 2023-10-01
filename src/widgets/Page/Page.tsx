import { type StateSchema } from 'app/providers/StoreProvider'
import { scrollRestoreActions } from 'features/ScrollRestore'
import { getScrollRestoreByPath } from 'features/ScrollRestore/model/selector/getScrollRestore'
import React, { type MutableRefObject, type UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import cls from './Page.module.scss'

interface PageProps {
    className?: string
    children: React.ReactNode,
    onObserv?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = ({ className, children, onObserv }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollTop = useSelector((state: StateSchema) => getScrollRestoreByPath(state, pathname))

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollTop
    })

    useInfinityScroll({
        wrapperRef,
        targetRef,
        callback: onObserv
    })

    const onScroll = useThrottle(
        (e: UIEvent<HTMLDivElement>) => {
            dispatch(scrollRestoreActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop
            }))
        }, 100)

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onObserv ? <div className={cls.trigger} ref={targetRef} /> : null}
        </main>
    )
}
