
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsSchema {
    comments: ArticleDetailsCommentsSchema,
    recommendations: ArticleDetailsRecommendationsSchema
}