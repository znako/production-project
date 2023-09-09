import { Article, ArticleBlocksType, ArticleBlockText, ArticleView } from '../../model/types/article'
import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icons';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleText } from '../ArticleText/ArticleText';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticlesListItem {
    className?: string
    article: Article
    view?: ArticleView
    isLoading?: boolean
}
export const ArticleListItem = (props: ArticlesListItem) => {
    const {
        className,
        view = ArticleView.SMALL,
        article,
        isLoading
    } = props

    const { t } = useTranslation()
    const navigate = useNavigate()

    const date = <Text text={article.createdAt} className={cls.date} />
    const title = <Text text={article.title} className={cls.title} />
    const types = <Text text={article.type.join(', ')} className={cls.types} />
    const views =   <>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </>
    const img = <img src={article.img} alt={article.title} className={cls.img} />

    const onOpenArticle = useCallback(
        () => {
            navigate(RoutePath.article_details + article.id)
        },
      [navigate, article],
    )
    

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => {
            return block.type === ArticleBlocksType.TEXT
        }) as ArticleBlockText

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        {date}
                    </div>
                    {title}
                    {types}
                    {img}
                    {textBlock && <ArticleText block={textBlock} className={cls.text} />}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>
                            {t("Читать далее")}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div> 
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imgWrapper}>
                    {img}
                    {date}
                </div>
                <div className={cls.articleInfo}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>
        </div>
    )
}
