import React from 'react'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundPage = () => {

     const {'*': paths} = useParams();

     const [count,setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])
  return (
   <p>指定されたパス[{paths}]は存在しません</p>
  )
}

export default NotFoundPage