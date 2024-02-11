import React from 'react'
import { Link } from 'react-router-dom'

const InfoPage = () => {
  return (
   <>
   <p>Infoページ</p>
  <Link to=".." relative="path">articeページトップに戻る</Link>
   </>
  )
}

export default InfoPage