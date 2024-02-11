//React Router本体をダウンロード
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

//ルーティングで使用するページをインポート
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";


//ルーティングページを設定
const routeBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path= '/' element={<TopPage/>} />
        <Route path= '/article' element={<ArticlePage/>} />
        <Route path= '/about' element={<AboutPage/>} />
        </>
    )
);

export default routeBasic;


// [
//     {path: '/', element: <TopPage/>},
//     {path: '/article', element: <ArticlePage/>},
//     {path: '/about', element: <AboutPage/>}
//   ]