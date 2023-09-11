import React, { MutableRefObject, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: React.ReactNode,
    onObserv?: () => void
}

export const Page = ({className, children, onObserv}: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfinityScroll({
        wrapperRef,
        targetRef,
        callback: onObserv
    })

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={targetRef} />
        </section>
    )
}
