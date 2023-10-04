import { type ReactNode } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'
import { type DropDownDirectionType } from 'shared/types/ui'

interface ItemsList {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    className?: string
    label?: string
    items: ItemsList[]
    value?: string
    defaultValue: string
    readonly?: boolean
    onChange: (value: string) => void
    direction?: DropDownDirectionType
}

const MapDirectionToClass: Record<DropDownDirectionType, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
}

export function ListBox (props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom right',
        onChange
    } = props

    return (
        <HStack gap='4'>
            {
                label
                    ? <span className={classNames('', { [cls.disabled]: readonly })}>{`${label}>`}</span>
                    : null
            }
            <HListbox
                disabled={readonly}
                as='div'
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button className={cls.triggered} disabled={readonly}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, [MapDirectionToClass[direction]])}
                >
                    {items.map((item) => (
                        <HListbox.Option
                            className={cls.item}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => {
                                return (
                                    <li
                                        className={classNames('', {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled
                                        }, [])}
                                    >
                                        {selected && '>'}
                                        {item.content}
                                    </li>
                                )
                            }}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
}
