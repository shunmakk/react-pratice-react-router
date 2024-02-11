import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const SearchPage = () => {
  
    const [count,setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])


    const {'*': keywords} = useParams();
  return (
    <p>検索ワード[{keywords}]のページです</p>
  )
}

export default SearchPage