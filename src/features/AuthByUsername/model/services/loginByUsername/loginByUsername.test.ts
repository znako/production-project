import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('async thunk loginByUsername ', () => {
    test('should call dispatch axios.post and has fulfilled status', async () => {
        const userAuthData = {
            id: '1',
            username: 'admin'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userAuthData }))
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toBeCalled()
        expect(asyncThunk.dispatch).toBeCalledTimes(3)
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userAuthData))
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userAuthData)
    })

    test('should return error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toBeCalled()
        expect(asyncThunk.dispatch).toBeCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
