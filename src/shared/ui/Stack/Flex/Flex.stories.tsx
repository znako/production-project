import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Flex } from './Flex'

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const JustifyCenter = Template.bind({})
JustifyCenter.args = {
    justify: 'center',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
    align: 'center',
    direction: 'column',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const Gap4 = Template.bind({})
Gap4.args = {
    gap: '4',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const Gap8 = Template.bind({})
Gap8.args = {
    gap: '8',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const Gap16 = Template.bind({})
Gap16.args = {
    gap: '16',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const Gap32 = Template.bind({})
Gap32.args = {
    gap: '32',
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}

export const Max = Template.bind({})
Max.args = {
    justify: 'between',
    max: true,
    children: <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
    </>
}
