import { getArticleData } from 'entities/Article';
import { getIsCanEditArticle } from 'pages/ArticleDetailsPage';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = ({className}: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const article = useSelector(getArticleData);
    const isCanEdit = useSelector(getIsCanEditArticle)
    console.log(isCanEdit);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(
      () => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
      },
      [navigate,article],
    )

    return (
        <div className={classNames(cls.ArtcileDetailsPageHeader, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {isCanEdit && <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEditArticle}
                className={cls.editBtn}
            >
                {t('Редактировать')}
            </Button>}
        </div>
    )
}
