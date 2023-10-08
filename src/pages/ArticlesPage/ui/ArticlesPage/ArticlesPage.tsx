import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { useSearchParams } from 'react-router-dom'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import cls from './ArticlesPage.module.scss'
import { VStack } from 'shared/ui/Stack'
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList'

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props

    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onObserv={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfinityList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
