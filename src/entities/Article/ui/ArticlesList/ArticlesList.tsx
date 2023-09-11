import { Article } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { Disabled } from 'shared/ui/Button/Button.stories';
import { ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
    className?: string
    articles: Article[]
    view?: ArticleView
    isLoading?: boolean
}

export const ArticlesList = (props: ArticlesListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading
    } = props

    const renderArticles = (article: Article) => (
        <ArticleListItem
            view={view}
            article={article}
            key={article.id}
            className={cls.card}
        />
    )

    return (
        <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
            {articles.length > 0 ?
                articles.map(renderArticles)
                : null
            }
            {
                isLoading && 
                new Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, i) => {
                    return <ArticleListItemSkeleton view={view} key={i} className={cls.card} />
                })
            }
        </div>
    )
}
