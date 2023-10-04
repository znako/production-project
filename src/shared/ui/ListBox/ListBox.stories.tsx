import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    items: [
        { value: 'first', content: 'first' },
        { value: 'second', content: 'second' },
        { value: 'third', content: 'third', disabled: true },
        { value: 'fourth', content: 'fourth' }
    ],
    defaultValue: 'choose',
    label: 'Choose',
    onChange: (value: string) => {}
}
