import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ArticlesPage from './ArticlesPage'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Orange = Template.bind({})
Orange.args = {}
Orange.decorators = [ThemeDecorator(Theme.ORANGE)]
