import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon
    }
]
