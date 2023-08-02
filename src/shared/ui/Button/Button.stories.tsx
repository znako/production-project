import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Text'
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
}

export const SizeLOutline = Template.bind({})
SizeLOutline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
}

export const SizeXLOutline = Template.bind({})
SizeXLOutline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SizeLSquare = Template.bind({})
SizeLSquare.args = {
    children: '>',
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
}

export const SizeXLSquare = Template.bind({})
SizeXLSquare.args = {
    children: '>',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
}
