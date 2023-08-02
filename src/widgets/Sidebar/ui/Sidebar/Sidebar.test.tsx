import { fireEvent, screen } from '@testing-library/react'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'
import { Sidebar } from './Sidebar'

describe('sidebar tests', () => {
    test('test render', () => {
        renderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderComponent(<Sidebar />)
        const btn = screen.getByTestId('toggleBtn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
