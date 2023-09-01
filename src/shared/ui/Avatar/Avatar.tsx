import { type CSSProperties, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string,
    alt?: string,
    size?: number
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size
    } = props

    const style = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }
    , [size])

    return (
        <img
            style={style}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    )
})
