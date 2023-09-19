import {Article, ArticleBlocksType, ArticleView, ArticleSortField, ArticleTypes} from './model/types/article';  
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import {ArticleSchema} from './model/types/articleSchema';
import { getArticleData, getArticleError, getArticleIsLoading } from './model/selectors/getArticle';
import { articleDetailsActions, articleDetailsReducer, ArticleDetailsSlice } from './model/slice/articleSlice';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { ArticleTypesTabs } from './ui/ArticleTypesTabs/ArticleTypesTabs';

export {
    Article,
    ArticleSchema,
    ArticleBlocksType,
    ArticleSortField,
    ArticleTypes
}


export {
    ArticleDetails
}

export { getArticleIsLoading,
    getArticleError,
    getArticleData  
}

export { ArticleDetailsSlice,
    articleDetailsActions,
    articleDetailsReducer
}

export {
    ArticleList,
    ArticleView
}
export {
    ArticleTypesTabs
}