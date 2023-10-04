import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type DropDownDirectionType } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './DropDown.module.scss'

interface DropDownItems {
    content: ReactNode
    disabled?: boolean
    onClick?: () => void
    href?: string
}

interface DropDownProps {
    className?: string
    trigger: ReactNode
    items: DropDownItems[]
    direction?: DropDownDirectionType
}

const MapDirectionToClass: Record<DropDownDirectionType, string> = {
    'top left': cls.itemsTopLeft,
    'top right': cls.itemsTopRight,
    'bottom left': cls.itemsBottomLeft,
    'bottom right': cls.itemsBottomRight
}

export function DropDown (props: DropDownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottom right'
    } = props

    return (
        <Menu
            as='div'
            className={classNames(cls.Menu, {}, [className])}
        >
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.itemsContainer, {}, [MapDirectionToClass[direction]])}>
                {items.map((item, i) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [cls.active]: active,
                                [cls.disabled]: item.disabled
                            }, [className])}
                        >
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item
                                key={i}
                                as={AppLink}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item
                            key={i}
                            as={Fragment}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}

            </Menu.Items>
        </Menu>
    )
}
