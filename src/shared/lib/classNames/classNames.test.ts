import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('className')).toBe('className')
    })

    test('with additional class', () => {
        const expected = 'className class1 class2'
        expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods true', () => {
        const expected = 'className class1 class2 hovered clicked'
        expect(classNames('className', { hovered: true, clicked: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods one false', () => {
        const expected = 'className class1 class2 hovered'
        expect(classNames('className', { hovered: true, clicked: false }, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods one undefined', () => {
        const expected = 'className class1 class2 hovered'
        expect(classNames('className', { hovered: true, clicked: undefined }, ['class1', 'class2'])).toBe(expected)
    })
})
