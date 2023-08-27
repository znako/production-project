import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Выберите',
    options: [{ value: '123', content: 'Выбор1' }, { value: '1234', content: 'Выбор2' }]
}
