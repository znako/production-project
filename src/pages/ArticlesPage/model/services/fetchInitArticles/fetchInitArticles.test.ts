import { ArticleView } from 'entities/Article'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesPage } from '../fetchArticlesPage/fetchArticlesPage'
import { fetchInitArticles } from './fetchInitArticles'

jest.mock('../fetchArticlesPage/fetchArticlesPage')

describe('fetchInitArticles.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchInitArticles, {
            articlesPage: {
                error: undefined,
                isLoading: false,
                view: ArticleView.SMALL,
                page: 1,
                limit: 9,
                hasMore: true,
                ids: [],
                entities: {},
                _inited: false
            }
        })

        await thunk.callThunk()
        
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesPage).toBeCalledWith({page: 1})
    })

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchInitArticles, {
            articlesPage: {
                error: undefined,
                isLoading: false,
                view: ArticleView.SMALL,
                page: 2,
                limit: 9,
                hasMore: false,
                ids: [],
                entities: {},
                _inited: true
            }
        })

        await thunk.callThunk()
        
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesPage).not.toHaveBeenCalled()
    })
})
