import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsMainContainer from '../NewsMain/NewsMainContainer'
import SinglePageNews from '../SinglePageNews/SinglePageNews'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<NewsMainContainer />}/>
            <Route path='/singlepagenews/:id' element={<SinglePageNews />}/>

        </Routes>
    </div>
  )
}
