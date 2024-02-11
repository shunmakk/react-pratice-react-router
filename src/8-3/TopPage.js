import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import MyHeader from './MyHeader'

const TopPage = () => {
  
    const [count, setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])

  return (
      <>
      <MyHeader/>
    <div>TopPage</div>
    </>
  )
}

export default TopPage