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
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticlesListItem {
    className?: string
    view?: ArticleView
}
export const ArticleListItemSkeleton = (props: ArticlesListItem) => {
    const {
        className,
        view = ArticleView.SMALL,
    } = props

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border='50%' />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title}/>
                    <Skeleton height={200} className={cls.img}/>
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36}/>
                    </div>
                </Card>
            </div> 
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapper}>
                    <Skeleton width={200} height={200} />
                </div>
                <div className={cls.articleInfo}>
                    <Skeleton width={130} height={16} className={cls.types}/>
                </div>
                <Skeleton width={150} height={16} className={cls.title}/>
            </Card>
        </div>
    )
}
