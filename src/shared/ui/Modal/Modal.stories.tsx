import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Normal = Template.bind({})
Normal.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sunt labore, nam reiciendis provident quaerat ducimus esse nisi, vero deserunt facilis iusto a tempore, ratione quae voluptas suscipit ipsam recusandae.'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sunt labore, nam reiciendis provident quaerat ducimus esse nisi, vero deserunt facilis iusto a tempore, ratione quae voluptas suscipit ipsam.'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
