import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

// @ts-ignore
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
