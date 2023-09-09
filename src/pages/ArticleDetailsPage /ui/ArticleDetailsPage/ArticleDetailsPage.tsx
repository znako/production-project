import { ArticleDetails } from "entities/Article";
import { CommentsList } from "entities/Comment";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/ArticleDetailsCommentsSlice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text } from "shared/ui/Text/Text";
import cls from './ArticleDetailsPage.module.scss';
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage /model/services/fetchCommentsByArticleId";
import { sendCommentForm } from "../../model/services/addCommentForm/sendCommentForm";
import { useCallback } from "react";
import { AddCommentForm } from "features/AddCommentForm";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className
    } = props
    
    const { t } = useTranslation('article-details')
    const { id } = useParams<{id: string}>()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading)
    const dispatch = useAppDispatch()
    const navigate= useNavigate()

    useInitialEffect(
        () => dispatch(fetchCommentsByArticleId(id))
    )

    const backToList = useCallback(
      () => {
        navigate(RoutePath.article)
      },
      [navigate],
    )
    

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(sendCommentForm(text))
      },
      [dispatch],
    )
    

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={backToList} >
                    {t('Назад к списку статей')}
                </Button>
                <ArticleDetails id={id}/>
                <Text title={t('Комментарии')} className={cls.commentsTitle}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentsList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage