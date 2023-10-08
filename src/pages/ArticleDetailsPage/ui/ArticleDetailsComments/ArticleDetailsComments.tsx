import { CommentsList } from 'entities/Comment'
import { AddCommentForm } from 'features/addCommentForm'
import { t } from 'i18next'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleDetailsCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailsComments = ({ className, id }: ArticleDetailsCommentsProps) => {
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    return (
        <VStack gap='8' max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L_SIZE}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentsList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    )
}
