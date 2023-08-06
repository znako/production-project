import { fireEvent, screen } from '@testing-library/react'
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'
import { Counter } from './Counter'

describe('Counter tests', () => {
    test('test render', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 1 } } })
        expect(screen.getByTestId('value')).toHaveTextContent('1')
    })

    test('test increment', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 1 } } })
        fireEvent.click(screen.getByTestId('incrementBtn'))
        expect(screen.getByTestId('value')).toHaveTextContent('2')
    })

    test('test decrement', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 1 } } })
        fireEvent.click(screen.getByTestId('decrementBtn'))
        expect(screen.getByTestId('value')).toHaveTextContent('0')
    })
})
