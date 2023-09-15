import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleTypesTabs } from './ArticleTypesTabs'

export default {
    title: 'entities/ArticleTypesTabs',
    component: ArticleTypesTabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleTypesTabs>

const Template: ComponentStory<typeof ArticleTypesTabs> = () => <ArticleTypesTabs />

export const Primary = Template.bind({})
Primary.args = {
    
}
