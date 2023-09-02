import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment: Comment,
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props

    if(isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={100} height={16} className={cls.username}/>
                </div>
                <Skeleton width='100%' height={50} className={cls.text}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30}/>}
                <Text text={comment.user.username} className={cls.username}/>
            </div>
            <Text text={comment.text} className={cls.text}/>
        </div>
    )
}
