import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const TopPage = () => {
  
    const [count, setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])

  return (
    <div>TopPage</div>
  )
}

export default TopPage