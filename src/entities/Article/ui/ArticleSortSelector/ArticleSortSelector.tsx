import { ArticleSortField } from '../../model/types/article'
import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type SortOrder } from 'shared/types'
import { Select, type SelectOptions } from 'shared/ui/Select/Select'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string
    order?: SortOrder
    sortField?: ArticleSortField
    onChangeOrder?: (newOrder: SortOrder) => void
    onChangeSort?: (newSortField: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        order,
        sortField,
        onChangeOrder,
        onChangeSort
    } = props

    const { t } = useTranslation()

    const orderList = useMemo<Array<SelectOptions<SortOrder>>>(() => {
        return [
            {
                value: 'asc',
                content: t('Возрастанию')
            },
            {
                value: 'desc',
                content: t('Убыванию')
            }
        ]
    }, [])

    const sortFieldList = useMemo<Array<SelectOptions<ArticleSortField>>>(() => {
        return [
            {
                value: ArticleSortField.CREATED,
                content: t('Дате')
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('Просмотрам')
            },
            {
                value: ArticleSortField.TITLE,
                content: t('Названию')
            }
        ]
    }, [])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                label={t('Сортировать по')}
                options={sortFieldList}
                value={sortField}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                label={t('По')}
                options={orderList}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
})
