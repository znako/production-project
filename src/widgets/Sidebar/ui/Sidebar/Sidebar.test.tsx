import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations.tsx/renderWithTranslations'
import { Sidebar } from './Sidebar'

describe('sidebar tests', () => {
    test('test render', () => {
        renderWithTranslations(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslations(<Sidebar />)
        const btn = screen.getByTestId('toggleBtn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
