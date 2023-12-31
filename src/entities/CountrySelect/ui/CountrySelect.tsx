import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { type SelectOptions } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: string
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options: Array<SelectOptions<Country>> = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        value,
        readonly,
        onChange
    } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange]
    )

    return (
        <ListBox
            readonly={readonly}
            label={t('Укажите страну')}
            defaultValue={t('Страна')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            direction='top right'
            className={classNames('', {}, [className])}
        />
    )
})
