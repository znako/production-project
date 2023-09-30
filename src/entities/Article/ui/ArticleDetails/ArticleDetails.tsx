import { ArticleBlocksType, type ArticleBlock } from '../../model/types/article'
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticle'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleSlice'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icons'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import cls from './ArticleDetails.module.scss'
import { ArticleText } from '../ArticleText/ArticleText'
import { ArticleCode } from '../ArticleCode/ArticleCode'
import { ArticleImage } from '../ArticleImage/ArticleImage'
import { HStack, VStack } from 'shared/ui/Stack'

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
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    const renderBlocks = useCallback(
        (block: ArticleBlock) => {
            switch (block.type) {
                case ArticleBlocksType.TEXT:
                    return <ArticleText block={block} key={block.id}/>
                case ArticleBlocksType.CODE:
                    return <ArticleCode block={block} key={block.id}/>
                case ArticleBlocksType.IMAGE:
                    return <ArticleImage block={block} key={block.id}/>

                default:
                    break
            }
        },
        []
    )

    let content: JSX.Element

    if (error) {
        content = (
            <div
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
            </div>
        )
    } else if (isLoading) {
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
    } else {
        content = <VStack
            gap='16'
            className={classNames(cls.ArticleDetails, {}, [className])}
        >
            <HStack justify='center' max>
                <Avatar
                    size={200}
                    src={article?.img}
                />
            </HStack>
            <VStack max gap='4'>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L_SIZE}
                />
                <HStack gap='8'>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text text={`${article?.views || 0}`} />
                </HStack >
                <HStack gap='8'>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text text={article?.createdAt} />
                </HStack >
            </VStack>
            {article?.blocks.map(renderBlocks)}
        </VStack>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    )
})
