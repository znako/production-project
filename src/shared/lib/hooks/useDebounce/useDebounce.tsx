import { MutableRefObject, useCallback, useRef } from 'react'

export const useDebounce = (callback: (...args: any) => void, delay: number) => {
    const debounceRef = useRef() as MutableRefObject<any>

    return (
        useCallback(
            (...args: any) => {
                if (debounceRef.current) {
                    clearTimeout(debounceRef.current)
                }

                debounceRef.current = setTimeout(() => {
                    callback(...args)
                }, delay);
            },
            [callback, delay],
        )
        
    )
}
