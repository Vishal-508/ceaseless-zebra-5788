import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsMainContainer from '../NewsMain/NewsMainContainer'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<NewsMainContainer />}/>
        </Routes>
    </div>
  )
}
