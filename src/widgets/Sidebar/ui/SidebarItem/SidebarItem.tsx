import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { type SidebarItemType } from '../../model/types/SidebarItem'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    authOnly?: boolean
}

export const SidebarItem = memo(({ item, collapsed, authOnly }: SidebarItemProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)

    if (authOnly && !authData) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
