import { Comment } from '../../model/types/comment'
import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentsListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentsList = (props: CommentsListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} comment={comment} className={cls.comment} key={comment.id}/>
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    )
}
