import { type Comment } from '../../model/types/comment'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from 'shared/ui/Stack'

interface CommentsListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentsList = (props: CommentsListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props

    const { t } = useTranslation()

    if (isLoading) {
        return (
            <VStack
                max
                gap='16'
                className={classNames('', {}, [className])}
            >
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </VStack>
        )
    }

    return (
        <VStack
            max
            gap='16'
            className={classNames('', {}, [className])}
        >
            {
                comments?.length
                    ? comments.map(comment => (
                        <CommentCard
                            isLoading={isLoading}
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </VStack>
    )
}
