import React from 'react'
import { mainRoutes } from '../routes'
import { Routes, Route, Navigate} from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        {mainRoutes.map(route => 
              <Route key={route.path} path={route.path} element={<route.element/>}/>
        )}
    </Routes>
  )
}

export default AppRouter