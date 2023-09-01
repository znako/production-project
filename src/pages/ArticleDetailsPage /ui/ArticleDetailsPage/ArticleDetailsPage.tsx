import { ArticleDetails } from "entities/Article";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams()
    const {
        className
    } = props

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    )
}

export default ArticleDetailsPage