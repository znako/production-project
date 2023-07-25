import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button, ThemeButton } from './Button'

describe('button tests', () => {
    test('render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('first', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
