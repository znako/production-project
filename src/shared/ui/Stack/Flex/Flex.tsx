import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

type JustifyFlex = 'start' | 'center' | 'end' | 'between'
type AlignFlex = 'start' | 'center' | 'end'
type DirectionFlex = 'column' | 'row'
type GapSize = '4' | '8' | '16' | '32'

const JustifyClass: Record<JustifyFlex, string> = {
    start: cls.JustifyStart,
    center: cls.JustifyCenter,
    end: cls.JustifyEnd,
    between: cls.JustifyBetween
}

const AlignClass: Record<AlignFlex, string> = {
    start: cls.AlignStart,
    center: cls.AlignCenter,
    end: cls.AlignEnd
}

const DirectionClass: Record<DirectionFlex, string> = {
    row: cls.DirectionRow,
    column: cls.DirectionColumn
}

const GapClass: Record<GapSize, string> = {
    4: cls.Gap4,
    8: cls.Gap8,
    16: cls.Gap16,
    32: cls.Gap32
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
    className?: string
    children: React.ReactNode
    justify?: JustifyFlex
    align?: AlignFlex
    direction?: DirectionFlex
    max?: boolean
    gap?: GapSize
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        max,
        gap
    } = props

    const additionalCls = [
        className,
        JustifyClass[justify],
        AlignClass[align],
        DirectionClass[direction],
        gap && GapClass[gap]
    ]

    const mods = {
        [cls.max]: max
    }

    return (
        <div className={classNames(cls.Flex, mods, additionalCls)}>
            {children}
        </div>
    )
}
