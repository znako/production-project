import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { CommentsList } from './CommentsList'

export default {
    title: 'entities/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1'}
        },
        {
            id: '2',
            text: 'comment2',
            user: {id: '2', username: 'user2'}
        },
    ]
}

export const Dark = Template.bind({})
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1'}
        },
        {
            id: '2',
            text: 'comment2',
            user: {id: '2', username: 'user2'}
        },
    ]
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({})
Orange.args = {
    comments: [
        {
            id: '1',
            text: 'comment1',
            user: {id: '1', username: 'user1'}
        },
        {
            id: '2',
            text: 'comment2',
            user: {id: '2', username: 'user2'}
        },
    ]
}
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}