import React, { useCallback, useMemo, useState } from 'react'

interface onMouse {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type useHoverReturn = [boolean, onMouse]

export const useHover = (): useHoverReturn => {
    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(
        () => {
            setIsHover(true)
        },
        [setIsHover]
    )

    const onMouseLeave = useCallback(
        () => {
            setIsHover(false)
        },
        [setIsHover]
    )

    return useMemo(
        () =>
            [
                isHover,
                {
                    onMouseEnter,
                    onMouseLeave
                }
            ],
        [isHover, onMouseEnter, onMouseLeave])
}
