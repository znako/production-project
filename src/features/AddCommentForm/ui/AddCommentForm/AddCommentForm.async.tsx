import { lazy } from 'react'

export const AddCommentFormAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => { resolve(import('./AddCommentForm')) }, 1500)
}))
