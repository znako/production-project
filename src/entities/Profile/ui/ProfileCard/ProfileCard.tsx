import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entities/CurrencySelect/ui/CurrencySelect'
import { type Currency } from 'entities/CurrencySelect'
import { type Country, CountrySelect } from 'entities/CountrySelect'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProfileCardProps {
    className?: string;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onEditName?: (value: string) => void;
    onEditLastname?: (value: string) => void;
    onEditAge?: (value: string) => void;
    onEditCity?: (value: string) => void;
    onEditUsername?: (value: string) => void;
    onEditAvatar?: (value: string) => void;
    onEditCurrency?: (value: Currency) => void;
    onEditCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        form,
        isLoading,
        error,
        readonly,
        onEditName,
        onEditLastname,
        onEditAge,
        onEditCity,
        onEditAvatar,
        onEditUsername,
        onEditCurrency,
        onEditCountry
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <HStack max justify='center' className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.edit]: !readonly
    }

    return (
        <VStack max gap='32' className={classNames(cls.ProfileCard, mods, [className])}>
            {
                form?.avatar
                    ? (
                        <HStack max justify='center'>
                            <Avatar
                                src={form.avatar}
                                alt={t('Аватар')}
                            />
                        </HStack>
                    )
                    : null
            }
            <VStack gap='16'>
                <Input
                    value={form?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onEditName}
                    readOnly={readonly}
                />
                <Input
                    value={form?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onEditLastname}
                    readOnly={readonly}
                />
                <Input
                    value={form?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onEditAge}
                    readOnly={readonly}
                />
                <Input
                    value={form?.city}
                    placeholder={t('Ваш город')}
                    onChange={onEditCity}
                    readOnly={readonly}
                />
                <Input
                    value={form?.username}
                    placeholder={t('Ваш username')}
                    onChange={onEditUsername}
                    readOnly={readonly}
                />
                <Input
                    value={form?.avatar}
                    placeholder={t('Ваш аватар')}
                    onChange={onEditAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    onChange={onEditCurrency}
                    value={form?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    onChange={onEditCountry}
                    value={form?.country}
                    readonly={readonly}
                />
            </VStack>
        </VStack>
    )
}
