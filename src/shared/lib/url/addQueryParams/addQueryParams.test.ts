import { getQueryParams } from "./addQueryParams"

describe('addQueryParams test', () => {
    test('should add param', () => { 
        const params = getQueryParams({
            search: 'js'
        })

        expect(params).toBe('?search=js')
     })

    test('should add multy params', () => { 
        const params = getQueryParams({
            search: 'js',
            order: 'asc',
        })

        expect(params).toBe('?search=js&order=asc')
     })

    test('work with undefined param', () => { 
        const params = getQueryParams({
            search: 'js',
            order: undefined
        })

        expect(params).toBe('?search=js')
     })
})