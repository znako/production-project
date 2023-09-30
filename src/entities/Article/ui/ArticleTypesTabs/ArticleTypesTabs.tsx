import { ArticleTypes } from '../../model/types/article'
import { t } from 'i18next'
import { getArticlesPageArticleType } from 'pages/ArticlesPage/model/selectors/getArticlesPage'
import React, { memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Tab, Tabs } from 'shared/ui/Tabs/Tabs'

interface ArticleTypesTabsProps {
    className?: string
    onClickTab: (value: ArticleTypes) => void
}

export const ArticleTypesTabs = memo(({ className, onClickTab }: ArticleTypesTabsProps) => {
    const articleType = useSelector(getArticlesPageArticleType)

    const tabsItem = useMemo<Tab[]>(() => [
        {
            value: ArticleTypes.ALL,
            content: t('Все')
        },
        {
            value: ArticleTypes.IT,
            content: t('Айти')
        },
        {
            value: ArticleTypes.ECONOMY,
            content: t('Экономика')
        },
        {
            value: ArticleTypes.SCIENCE,
            content: t('Наука')
        }
    ], [])

    const onClickTabHandler = useCallback(
        (tab: Tab) => {
            if (tab.value !== articleType) {
                onClickTab(tab.value as ArticleTypes)
            }
        },
        [onClickTab, articleType]
    )

    return (
        <Tabs
            tabs={tabsItem}
            value={articleType}
            onClickTab={onClickTabHandler}
            className={classNames('', {}, [className])}
        />
    )
})
