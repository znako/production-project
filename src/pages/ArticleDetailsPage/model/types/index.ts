
import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { type ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema'

export interface ArticleDetailsSchema {
    comments: ArticleDetailsCommentsSchema,
    recommendations: ArticleDetailsRecommendationsSchema
}
