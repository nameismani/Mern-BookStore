import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import apiRequest from '../apiRequest';


const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const API_URL = `http://localhost:3456/books/${id}`
  // const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async() => {
    setIsLoading(true);
    const postOption = {
      method:"DELETE",
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
  };
  
  return (
    <div className='p-4'>
 
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {isLoading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;