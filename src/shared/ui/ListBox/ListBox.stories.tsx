import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}> <Story /></div>
    ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    items: [
        { value: 'first', content: 'firstfirstfirstfirst' },
        { value: 'second', content: 'second' },
        { value: 'third', content: 'third', disabled: true },
        { value: 'fourth', content: 'fourth' }
    ],
    defaultValue: 'choose',
    label: 'Choose',
    onChange: (value: string) => {}
}

export const TopRight = Template.bind({})
TopRight.args = {
    items: [
        { value: 'first', content: 'firstfirstfirstfirst' },
        { value: 'second', content: 'second' },
        { value: 'third', content: 'third', disabled: true },
        { value: 'fourth', content: 'fourth' }
    ],
    defaultValue: 'choose',
    label: 'Choose',
    onChange: (value: string) => {},
    direction: 'top right'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
    items: [
        { value: 'first', content: 'firstfirstfirstfirst' },
        { value: 'second', content: 'second' },
        { value: 'third', content: 'third', disabled: true },
        { value: 'fourth', content: 'fourth' }
    ],
    defaultValue: 'choose',
    label: 'Choose',
    onChange: (value: string) => {},
    direction: 'top left'
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
    items: [
        { value: 'first', content: 'firstfirstfirstfirst' },
        { value: 'second', content: 'second' },
        { value: 'third', content: 'third', disabled: true },
        { value: 'fourth', content: 'fourth' }
    ],
    defaultValue: 'choose',
    label: 'Choose',
    onChange: (value: string) => {},
    direction: 'bottom left'
}
