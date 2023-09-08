import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentCard } from './CommentCard'

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment:
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1', avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'}
        }
}

export const Dark = Template.bind({})
Dark.args = {
    comment:
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1'}
        },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({})
Orange.args = {
    comment:
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1'}
        }
}
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}