import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import AboutPage from './AboutPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>

// @ts-expect-error bug
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
