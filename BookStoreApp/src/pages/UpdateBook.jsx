import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import apiRequest from '../apiRequest';


const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const API_URL = `http://localhost:3456/books/${id}`

  useEffect(()=>{
    const fetchData = async()=>{

      const [errMessage,data]= await apiRequest(API_URL)
      if(errMessage){
        console.log(errMessage ) 
        setIsLoading(false)
      } 
      if(!errMessage){
      
        setAuthor(data.data.author);
        setPublishYear(data.data.publishYear)
        setTitle(data.data.title)
        setIsLoading(false)
      }
      
       }
      //  setTimeout(()=>{(async()=> await fetchData())()},2000)
      (async()=> await fetchData())()
  },[])

  const handleUpdateBook = async()=>{
    const postData = {
     title,
     author,
     publishYear
    }
    const postOption = {
     method:"PATCH",
     headers: {
       "Content-Type": "application/json",
     },
     body:JSON.stringify(postData)
    }
    setIsLoading(false)
    const [errMessage,data] = await apiRequest(API_URL,postOption)
    if(errMessage){
     setIsLoading(false)
     console.log(errMessage ) 
   
   } 
   if(!errMessage) {
     setIsLoading(false)
 console.log(data)
 navigate('/');
   }
   }
  return (
    <div className='p-4'>

    <h1 className='text-3xl my-4'>Edit Book</h1>
    {isLoading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto '>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full disabled'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
        <input
          type='number'
          value={publishYear}
          disabled={true}
          onChange={(e) => setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full disabled '
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={ handleUpdateBook }>
        Save
      </button>
    </div>
  </div>
  )
}

export default UpdateBook