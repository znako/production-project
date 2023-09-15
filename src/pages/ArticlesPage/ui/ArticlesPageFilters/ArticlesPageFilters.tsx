import { ArticleSortField, ArticleTypes, ArticleTypesTabs, ArticleView } from 'entities/Article';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { getArticlesPageArticleType, getArticlesPageOrder, getArticlesPagePage, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/getArticlesPage';
import { fetchArticlesPage } from 'pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage';
import { ArticlesPageActions } from 'pages/ArticlesPage/model/slice/ArticlesPageSlice';
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { Select } from 'shared/ui/Select/Select';
import { Tab, Tabs } from 'shared/ui/Tabs/Tabs';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const {
        className
    } = props

    const view = useSelector(getArticlesPageView)
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const order = useSelector(getArticlesPageOrder)
    const sortField = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    

    const fetchData = useCallback(
      () => {
        dispatch(fetchArticlesPage({isReplace: true}))
      },
      [dispatch],
    )
    
    const DebouncedFetchData = useDebounce(fetchData, 500)

    const onSetView = useCallback(
        (view: ArticleView) => {
            dispatch(ArticlesPageActions.setView(view))
            fetchData()
        },
        [dispatch],
    )

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(ArticlesPageActions.setOrder(newOrder))
            dispatch(ArticlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch],
    )

    const onChangeSortField = useCallback(
        (newSortField: ArticleSortField) => {
            dispatch(ArticlesPageActions.setSort(newSortField))
            dispatch(ArticlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch],
    )

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(ArticlesPageActions.setSearch(newSearch))
            dispatch(ArticlesPageActions.setPage(1))
            DebouncedFetchData()
        }, [dispatch])

    const onClickTab = useCallback(
        (value: ArticleTypes) => {
            dispatch(ArticlesPageActions.setType(value))
            dispatch(ArticlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch],
    )
    
   
        
    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sortField={sortField}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSortField}
                />
                <ArticleViewSelector view={view} setView={onSetView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypesTabs
                className={cls.tabs}
                onClickTab={onClickTab}
            />
        </div>
    )
}
