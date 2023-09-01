import { ArticleBlocksType, getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleSlice'
import React, { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icons'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import cls from './ArticleDetails.module.scss';
import { ArticleText } from '../ArticleText/ArticleText'
import { ArticleBlock } from '../../model/types/article'
import { ArticleCode } from '../ArticleCode/ArticleCode'
import { ArticleImage } from '../ArticleImage/ArticleImage'

const reducers: ReducersList = {
    article: articleDetailsReducer
}

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id
    } = props

    const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)
    const article = useSelector(getArticleData)

    const dispatch = useAppDispatch()
    const { t } = useTranslation('article-details')

    useEffect(() => {
        if (__PROJECT__ !== 'storybook'){
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    const renderBlocks = useCallback(
      (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlocksType.TEXT:
                return <ArticleText block={block} key={block.id} className={cls.block}/>
            case ArticleBlocksType.CODE:
                return <ArticleCode block={block} key={block.id} className={cls.block}/>
            case ArticleBlocksType.IMAGE:
                return <ArticleImage block={block} key={block.id} className={cls.block}/>
        
            default:
                break;
        }
      },
      [],
    )
    

    let content: JSX.Element;
    
    if (error) {
        content =  (
            <div
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
            </div>
        )
    }
    else if (isLoading) {
        content = (
            <div
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
            </div>
        )
    }
    else {
        content = <div
                    className={classNames(cls.ArticleDetails, {}, [className])}
                >   
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    </div>
                    <Text title={article?.title} text={article?.subtitle} size={TextSize.L_SIZE}/>
                    <div className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text text={article?.views+''} />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text text={article?.createdAt} />
                    </div>
                    {article?.blocks.map(renderBlocks)}
                </div>
    }
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
        
    )
})
