import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { type SelectOptions } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options: Array<SelectOptions<Currency>> = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        value,
        readonly,
        onChange
    } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange]
    )

    return (
        <ListBox
            readonly={readonly}
            label={t('Укажите валюту')}
            defaultValue={t('Валюта')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            direction={'top right'}
            className={classNames('', {}, [className])}
        />
    )
})
