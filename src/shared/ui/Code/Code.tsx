import { ArticleBlockCode } from 'entities/Article/model/types/article'
import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon } from '../Icon/Icons'
import cls from './Code.module.scss'
import CopyIcon from 'shared/assets/icons/copy.svg'

interface CodeProps {
    className?: string
    code: string
}

export const Code = (props: CodeProps) => {
    const {
        className,
        code
    } = props

    const onCopy = useCallback(
        () => {
            navigator.clipboard.writeText(code)
        },
        [code]
    )

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.CopyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon}/>
            </Button>
            <code>
                {code}
            </code>
        </pre>

    )
}
