import { getIsCanEditArticle } from './model/selectors/article';

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export {
    ArticleDetailsSchema
} from './model/types/index'

export {
    articleDetailsReducers
} from './model/slices/index'

export {
    getIsCanEditArticle
}