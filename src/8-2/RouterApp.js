import React from 'react'
import { NavLink, Link ,Outlet } from 'react-router-dom'
import './index.css'


const isCurrent = ({isActive , isPending}) =>  isActive ? 'active' : ''

const RouterApp = () => {
  return (
   <>
   <ul>
   <li><NavLink to="/" className={isCurrent} style={{ color: 'black' ,textDecoration: 'none'  }}>トップ</NavLink></li>
   <li><NavLink to="/artice" className={isCurrent} style={{ color: 'black' ,textDecoration: 'none'  }}>公開記事</NavLink></li>
   <li><Link to="/about" className={isCurrent} style={{ color: 'black' ,textDecoration: 'none'  }}>このサイトについて</Link></li>
   <li><Link to="artice/info" style={{ color: 'black' ,textDecoration: 'none'  }}>Infoページ</Link></li>
   </ul>
   <hr/>
   {/* リンク先の表示領域を確保 */}
   <Outlet/>
   </>
  )
}

export default RouterApp