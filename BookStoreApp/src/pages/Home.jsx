import React from 'react';
import { useEffect, useState }from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/spinner';
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BooksCard';


const Home = ({books,setBooks,setIsLoading,isLoading}) => {
  
  const [showType,setShowType] = useState(true)
  const API_URL = "http://localhost:3456/books"

  useEffect(()=>{
    const fetchData = async(req,res)=>{
 try{
    const response = await fetch(API_URL)
    if(!response.ok) throw 'Error occured while fetching data'
    const {data} = await response.json()
    console.log(data)
    setBooks(data)
 }catch(err){
    console.log(err.messaage)
 }finally{
    setIsLoading(false)
 }
    }
    // setTimeout(()=>{(async()=> await fetchData())()},2000)
    (async()=> await fetchData())()
},[])

  return (
  <>
  <div className='p-4 justify-self-center'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg hover:text-white hover:font-semibold text-'
          onClick={() => setShowType(true)}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg hover:text-white hover:font-semibold'
          onClick={() => setShowType(false)}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
         <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
    {isLoading ? <h1><Spinner/></h1> : 
        <>{showType ? <BooksTable books = {books}/> : <BooksCard  books = {books}/>}</>
    }
</div>
  </>
  )
}

export default Home