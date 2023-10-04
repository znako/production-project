import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { DropDown } from './DropDown'
import { Button } from '../Button/Button'

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    items: [
        { content: 'First' },
        { content: 'Second' },
        { content: 'Third' }
    ],
    trigger: <Button>Menu</Button>
}
