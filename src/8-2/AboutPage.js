import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
 
    //動的なプログラムからのページ移動も可能

    const  navigate = useNavigate();

    const handleClick = () => navigate("/");

  return (
    <>
    <p>aboutページです。</p>
    <h2 onClick={handleClick}>トップページに移動</h2>
    </>
  )
}

export default AboutPage