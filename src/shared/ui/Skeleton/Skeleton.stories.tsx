import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Skeleton } from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const PrimaryNormal = Template.bind({})
PrimaryNormal.args = {
    width: 200,
    height: 50
}

export const CircleNormal = Template.bind({})
CircleNormal.args = {
    width: 200,
    height: 200,
    border: '50%'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    width: 200,
    height: 50
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
    width: 200,
    height: 200,
    border: '50%'
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryOrange = Template.bind({})
PrimaryOrange.args = {
    width: 200,
    height: 50
}
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const CircleOrange = Template.bind({})
CircleOrange.args = {
    width: 200,
    height: 200,
    border: '50%'
}
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)]
