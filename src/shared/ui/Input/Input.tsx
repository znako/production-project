import { useState, type InputHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props

    const [caretPosition, setCaretPosition] = useState(0)
    const [focus, setFocus] = useState(false)

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <div className={cls.placeholder}>
                {
                    placeholder &&
                    `${placeholder}>`
                }
            </div>
            <div className={cls.caretWrapper}>
                {focus && <span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} />}
                <input
                    type={type}
                    value={value}
                    onChange={onChangeInput}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoFocus={autoFocus}
                    {...otherProps}
                />
            </div>
        </div>
    )
}
