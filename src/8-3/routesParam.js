import React from 'react'
import RouterParam from './RouterParam'
import TopPage from './TopPage'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'
import {Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>}>
            <Route path="/" element={<TopPage/>}  />
            <Route path="/book/:isbn?" element={<BookPage/>}/>
            <Route path="/bookQuery" element={<BookQueryPage/>}/>
            {/* 可変調パラメーターを定義 */}
            <Route path='/search/*' element={<SearchPage/>}/>
             {/* 任意のページに対応するルート */}
             <Route path='*' element={<NotFoundPage/>} />
        </Route>
    )
)

export default routesParam;