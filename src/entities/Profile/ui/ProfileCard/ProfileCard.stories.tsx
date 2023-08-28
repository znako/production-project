import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/CurrencySelect'
import { Country } from 'entities/CountrySelect'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const NormalReadOnlyTrue = Template.bind({})
NormalReadOnlyTrue.args = {
    form: {
        first: 'first',
        lastname: 'lastname',
        age: 123,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Korolev',
        username: 'znako',
        avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
    },
    readonly: true
}

export const NormalReadOnlyFalse = Template.bind({})
NormalReadOnlyFalse.args = {
    form: {
        first: 'first',
        lastname: 'lastname',
        age: 123,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Korolev',
        username: 'znako',
        avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
    },
    readonly: false
}

export const DarkReadonlyTrue = Template.bind({})
DarkReadonlyTrue.args = {
    form: {
        first: 'first',
        lastname: 'lastname',
        age: 123,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Korolev',
        username: 'znako',
        avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
    },
    readonly: true
}
DarkReadonlyTrue.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkReadonlyFalse = Template.bind({})
DarkReadonlyFalse.args = {
    form: {
        first: 'first',
        lastname: 'lastname',
        age: 123,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Korolev',
        username: 'znako',
        avatar: 'https://avatars.githubusercontent.com/u/91160077?s=400&u=4aeda31adf480de7e5fd10a7c19b15cc3ee9ae31&v=4'
    },
    readonly: false
}
DarkReadonlyFalse.decorators = [ThemeDecorator(Theme.DARK)]

export const LoadingNormal = Template.bind({})
LoadingNormal.args = {
    isLoading: true
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
    isLoading: true
}
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorNormal = Template.bind({})
ErrorNormal.args = {
    error: 'error'
}

export const ErrorDark = Template.bind({})
ErrorDark.args = {
    error: 'error'
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
