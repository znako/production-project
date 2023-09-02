import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
import {ArticleDetailsCommentsSchema} from './model/types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer, getArticleComments } from "./model/slice/ArticleDetailsCommentsSlice";

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
    ArticleDetailsCommentsSchema,
    articleDetailsCommentsReducer,
    getArticleComments
}
