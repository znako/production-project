import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconsProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = (props: IconsProps) => {
    const {
        className,
        Svg
    } = props

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    )
}
