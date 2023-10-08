import { ArticleList } from 'entities/Article'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useGetArtcilerecommendationsList } from '../api/articleRecommendationsListApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { data: articles, error, isLoading } = useGetArtcilerecommendationsList(3)

    if (error || isLoading) {
        return null
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L_SIZE}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>

    )
}
