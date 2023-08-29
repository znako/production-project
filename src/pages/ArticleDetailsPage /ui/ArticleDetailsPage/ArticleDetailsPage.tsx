import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('/article')
    const {
        className
    } = props

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            Articles Details Page
        </div>
    )
}

export default ArticleDetailsPage