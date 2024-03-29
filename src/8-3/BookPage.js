import React from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import MyHeader from './MyHeader';
import books from './books';

//ルートパラメータを受け取る
import { useParams } from 'react-router-dom'

const BookPage = () => {

    const [count,setCount] = useOutletContext();
    useEffect(() => setCount(count + 1),[setCount])
  
    const {isbn = '945-34-5-66-7-3344'} = useParams();
    const {title,summary} = books.find(b => isbn === b.isbn)
  
  return (
      <>
      <MyHeader   description={summary}  />
      <p>ISBNコード[{isbn}]のページです。</p>
      </>
  )
}

export default BookPage