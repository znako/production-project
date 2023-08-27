import { type ChangeEvent, memo, useMemo, useCallback } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface OptionsList {
    value?: string
    content?: string
}

interface SelectProps {
    className?: string
    value?: string
    label?: string
    options?: OptionsList[]
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        value,
        label,
        options,
        readonly,
        onChange
    } = props

    const optionsList = useMemo(() =>
        options?.map((opt) => {
            return <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        })
    , [options])

    const onChangeHandler = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.target.value)
        },
        [onChange]
    )

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {
                label
                    ? <span className={cls.label}>{`${label}>`}</span>
                    : null
            }
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
})
