import React, { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({className}: ArticleEditPageProps) => {

    const {id} = useParams<{id: string}>()
    const isEdit = Boolean(id)
    const { t } = useTranslation() 

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {
                isEdit
                ? t('Редактирование статьи с id')+id
                : t('Создание новой статьи')
            }
        </div>
    )
})

export default ArticleEditPage