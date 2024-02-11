import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RouterParam = () => {
 

  //カウント数を管理するためのstateを準備
  const [count, setCount] = useState(0);

  return (
  <>
   <p>アクセス数: {count}</p>
  <ul>
    <li><NavLink to="/">トップ</NavLink></li>
    <li><NavLink to="/book/345-3444-5-66-73-3344">NextJs15.0徹底解読！</NavLink></li>
    <li><NavLink to="/bookQuery?isbn=345-3444-5-66-73-3344">NextJs15.0徹底解読！（Query版 !基本クエリ情報は使わない）</NavLink></li>
    <li><NavLink to="/book" end>既定の書籍</NavLink></li>
    <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
    <li><NavLink to="/nothing/">存在しないページ</NavLink></li>
  </ul>
  <hr/>
  <Outlet context={[count, setCount]}/>
  </>
  )
}

export default RouterParam