import { ArticleList } from 'entities/Article'
import { getArticlesPageIsLoading, getArticlesPageView, getArticlesPageError } from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slices/articlesPageSlice'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'

interface ArticleInfinityListProps {
    className?: string
}

export const ArticleInfinityList = ({ className }: ArticleInfinityListProps) => {
    const { t } = useTranslation()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const error = useSelector(getArticlesPageError)

    if (error) {
        return (
            <Text title={t('Ошибка при загрузке статей')} text={t('Попробуйте перезагрузить страницу')}/>
        )
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    )
}
