//ルート固有の情報を取得する -handle
//ここではメタ情報を定義する

import TopPage from "./TopPage";
import BookPage from "./BookPage";
import RouterParam from "./RouterParam";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";


//handle属性でメタ情報を定義
const routeshandle = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>}>
         <Route path="/" element={<TopPage/>} handle={{
             title: 'トップページ',
             keywords: 'React, javascript',
             description: 'トップページの紹介です。'
         }} />
        <Route path="/book/:isbn?" element={<BookPage/>} handle={{
            title: '書籍情報 - %s',
            keywords: 'React - %s',
            
        }} />
        </Route>
    ) 
)