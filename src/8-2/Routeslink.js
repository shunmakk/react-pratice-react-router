import { createBrowserRouter, createRoutesFromElements, Route,  } from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import InfoPage from "./InfoPage";

const RoutesLink = createBrowserRouter(
 createRoutesFromElements(
    //  トップルートを追加
    <Route path="/" element={<RouterApp/>}>  
      <Route path="/" element={<TopPage/>}/>
      <Route path="/artice" element={<ArticlePage/>}/>
      <Route path="/artice/info" element={<InfoPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Route>
 )
)

export default RoutesLink;