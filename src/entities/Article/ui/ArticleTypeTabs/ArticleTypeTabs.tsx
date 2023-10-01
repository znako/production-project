import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { type Tab, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/types/article'

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props
    const { t } = useTranslation()

    const typeTabs = useMemo<Tab[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t])

    const onTabClick = useCallback((tab: Tab) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onClickTab={onTabClick}
            className={classNames('', {}, [className])}
        />
    )
})
