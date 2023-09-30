import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const authData = useSelector(getUserAuthData)
    const location = useLocation()

    if (!authData) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        )
    }

    return (
        children
    )
}
