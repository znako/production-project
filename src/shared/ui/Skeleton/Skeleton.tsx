import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    width?: string | number
    height?: string | number
    border?: string
} 

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        border
    } = props

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div
            style={style}
            className={classNames(cls.Skeleton, {}, [className])}
        >
        </div>
    )
}
