import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './Text.module.scss'

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S_SIZE = 's_size',
    M_SIZE = 'm_size',
    L_SIZE = 'l_size',
}

type HeaderType = 'h1' | 'h2' | 'h3'

const MapSizeToHeader: Record<TextSize, HeaderType> = {
    [TextSize.S_SIZE]: 'h3',
    [TextSize.M_SIZE]: 'h2',
    [TextSize.L_SIZE]: 'h1'
}

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M_SIZE
    } = props

    const HeaderTag = MapSizeToHeader[size]

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className, cls[align], cls[size]])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
