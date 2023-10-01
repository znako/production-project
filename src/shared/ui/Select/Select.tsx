import { type ChangeEvent, useMemo, useCallback } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    value?: T
    label?: string
    options?: Array<SelectOptions<T>>
    readonly?: boolean
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
            onChange?.(event.target.value as T)
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
}
