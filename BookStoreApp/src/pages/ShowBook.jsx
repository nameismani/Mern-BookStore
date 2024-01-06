import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import apiRequest from '../apiRequest';
import { format ,parse } from 'date-fns';


const ShowBook = ({isLoading,setIsLoading}) => {
  const [book,setBook] = useState([])
  const { id } = useParams();
  const API_URL = `http://localhost:3456/books/${id}`

  useEffect(()=>{
//     const fetchData = async(req,res)=>{
//  try{
//     const response = await fetch(API_URL)
//     if(!response.ok) throw 'Error occured while fetching data'
//     const {data} = await response.json()
//     console.log(data)
//     setBook(data)
//  }catch(err){
//     console.log(err.messaage)
//  }finally{
//     setIsLoading(false)
//  }
//     }
    // setTimeout(()=>{(async()=> await fetchData())()},2000)
 const fetchData = async(req,res)=>{
// try{
//   const [errMessage,data]= await apiRequest(API_URL)
//   if(errMessage) throw errMessage
//   console.log(data)
//   setBook(data)
// }
// catch(err){
//   console.log(err)
// }finally{
//   setIsLoading(false)
// }
const [errMessage,data]= await apiRequest(API_URL)
if(errMessage){
  console.log(errMessage ) 
  setIsLoading(false)
} 
if(!errMessage){
  console.log(data)
  setBook(data.data)
  setIsLoading(false)
}

 }
//  setTimeout(()=>{(async()=> await fetchData())()},2000)
(async()=> await fetchData())()

},[])

// let createdAt = format(new Date(book.createdAt).toISOString(), 'MMMM dd, yyyy pp')
// let updatedAt = format(new Date(), 'MMMM dd, yyyy pp')
// try {
  // var formattedDate = format(new Date(book.updatedAt.replace(/GMT.*$/, '')), 'MMMM dd, yyyy p');
  // Use formattedDate in your component
// } catch (error) {
//   console.error('Error formatting date:', error);
// }
// console.log(format(new Date(), 'MMMM dd, yyyy pp'),format(new Date(book.createdAt), 'MMMM dd, yyyy pp'))
  return (
  <>
  {isLoading ? <p>Loading</p> : 
   <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 m-auto shadow-2xl shadow-slate-400' >
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Id</span>
     <span>{book._id}</span>
   </div>
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Title</span>
     <span>{book.title}</span>
   </div>
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Author</span>
     <span>{book.author}</span>
   </div>
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
     <span>{book.publishYear}</span>
   </div>
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Create Time</span>
     <span>{book.createdAt}</span>
   </div>
   <div className='my-4'>
     <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
     <span>{book.updatedAt}</span>
   </div>
 </div>
  }
  </>
  )
}

export default ShowBook