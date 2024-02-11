import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const BookQueryPage = () => {
 
    const [params, setParams] =useSearchParams(
        {isbn: '345-3444-5-66-73-3344'}
    )
    const [count,setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])

  return (
    <p>ISBNコード[{params.get('isbn')}]のページです。</p>
  )
}

export default BookQueryPage