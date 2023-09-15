import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { ArticleTypes } from 'entities/Article';

export interface Tab {
    value: ArticleTypes
    content: string
}

interface TabsProps {
    className?: string
    tabs: Tab[],
    value: string,
    onClickTab: (tab: Tab) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onClickTab
    } = props

    const onClickTabHandler = useCallback((tab: Tab) => () => {
        onClickTab(tab)
    }, [onClickTab])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map(tab => 
                    (
                        <Card
                            key={tab.value}
                            className={cls.tab}
                            theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                            onClick={onClickTabHandler(tab)}
                        >
                            {tab.content}
                        </Card>
                    )
                )
            }
        </div>
    )
})
