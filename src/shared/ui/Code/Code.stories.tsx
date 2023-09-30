import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Code } from './Code'

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
    code: `export default {
        title: 'shared/Code',
        component: Code,
        argTypes: {
            backgroundColor: { control: 'color' }
        }
    } as ComponentMeta<typeof Code>
    
    const Template: ComponentStory<typeof Code> = (args) `
}
