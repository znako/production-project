import React, { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

export const BugButton = () => {
    const [error, setError] = useState(false)

    const toggle = () => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={toggle}>
            throw error
        </Button>
    )
}
