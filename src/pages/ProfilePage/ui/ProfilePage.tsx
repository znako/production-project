import { profileReducer } from 'entities/Profile'
import React from 'react'
import { AsyncReducersLoader } from 'shared/lib/AsyncReducersLoader/AsyncReducersLoader'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <AsyncReducersLoader reducers={{ profile: profileReducer }} removeAfterUnMount={true}>
            <div className={classNames('', {}, [className])}>
                ProfilePage
            </div>
        </AsyncReducersLoader>
    )
}

export default ProfilePage
