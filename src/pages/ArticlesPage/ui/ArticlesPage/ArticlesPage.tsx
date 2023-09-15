import { Article, articleDetailsActions, ArticlesList } from "entities/Article";
import { ArticleView } from "entities/Article/";
import { ArticlesPageActions, ArticlesPageReducer, getArticles } from "../../model/slice/ArticlesPageSlice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from './ArticlesPage.module.scss';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPagePage, getArticlesPageView } from "pages/ArticlesPage/model/selectors/getArticlesPage";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesPage } from "pages/ArticlesPage/model/services/fetchArticlesPage/fetchArticlesPage";
import { ArticleViewSelector } from "entities/Article/ui/ArticleViewSelector/ArticleViewSelector";
import { useCallback } from "react";
import { Page } from "widgets/Page/Page";
import { fetchNextArticles } from "pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { fetchInitArticles } from "pages/ArticlesPage/model/services/fetchInitArticles/fetchInitArticles";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
  articlesPage: ArticlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
      className
    } = props
    
    const { t } = useTranslation('/article')
    const articles = useSelector(getArticles.selectAll)
    const error = useSelector(getArticlesPageError)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const [searchParams] = useSearchParams()
    
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
      dispatch(fetchInitArticles(searchParams))
    })

    
    const onObserv = useCallback(
      () => {
        dispatch(fetchNextArticles())
      },
      [dispatch],
    )
    
    if (error) {
      return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page className={classNames(cls.ArticlesPage, {}, [className])}>
            <Text title={t('Ошибка в загрузке статей')} align={TextAlign.CENTER} />
          </Page>
        </DynamicModuleLoader>
      )
    }

    if (!isLoading && !articles.length) {
        return <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                    <Page onObserv={onObserv} className={classNames(cls.ArticlesPage, {}, [className])}>
                        <ArticlesPageFilters />
                        <Text title={t('Статьи не найдены')} className={cls.notFoundText}/>
                    </Page>
                </DynamicModuleLoader>
    }
    

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page onObserv={onObserv} className={classNames(cls.ArticlesPage, {}, [className])}>
              <ArticlesPageFilters />
              <ArticlesList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.articlesList}
              />
          </Page>
        </DynamicModuleLoader>
    )
}

export default ArticlesPage