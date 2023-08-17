import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/types/SidebarItemType'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    const mods: Record<string, boolean> = {
        [cls.collapsed]: collapsed
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, mods, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
