import { classNames } from 'shared/lib/classNames/classNames'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/editableProfileCard/ui/editableProfileCard'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('/profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <Text title={t('Пользователь не найден')} />
        )
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <ProfilePageHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
