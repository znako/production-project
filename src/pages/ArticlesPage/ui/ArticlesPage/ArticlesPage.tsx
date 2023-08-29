import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('/article')
    const {
        className
    } = props

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            Articles Page
        </div>
    )
}

export default ArticlesPage