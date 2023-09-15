import React from 'react'

export const getQueryParams = (newParams: Partial<Record<string, string>>) => {
    const oldParams = new URLSearchParams(window.location.search)
    Object.entries(newParams).map(([name, value]) => {
        if (value !== undefined) {
            oldParams.set(name, value)
        }
    })

    return `?${oldParams.toString()}`
}

export const addQueryParams = (newParams: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(newParams))
}
