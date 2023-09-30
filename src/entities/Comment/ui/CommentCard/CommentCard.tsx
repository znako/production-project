import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: Comment,
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props

    if (isLoading) {
        return (
            <VStack
                max
                gap='8'
                className={classNames(cls.CommentCard, { [cls.loading]: isLoading }, [className])}
            >
                <HStack>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={100} height={16} className={cls.username}/>
                </HStack>
                <Skeleton width='100%' height={50} className={cls.text}/>
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            max
            gap='8'
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={RoutePath.profile + comment.user.id}>
                <HStack>
                    {comment.user.avatar && <Avatar src={comment.user.avatar} size={30}/>}
                    <Text text={comment.user.username} className={cls.username}/>
                </HStack>
            </AppLink>
            <Text text={comment.text}/>
        </VStack>
    )
}
