import { getUserAuthData } from 'entities/User'
import React, { memo, Suspense, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { RequireAuth } from '..'

const AppRouter = () => {
    const renderWithWrapper = useCallback(
      (route: AppRouteProps) => {
        const element = <Suspense fallback={<PageLoader />}>
                            {route.element}
                        </Suspense>
       return <Route
                    key={route.path}
                    path={route.path}
                    element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                />
      },
      [],
    )
    
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)
