import React, { useEffect, useState }from 'react'
import { Routes,Route,Link } from 'react-router-dom'

import Home from './pages/Home'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import BackButton from './components/BackButton'


const App = () => {
  const [books,setBooks] = useState([])


  const [isLoading,setIsLoading] = useState(true)
  // const API_URL = "http://localhost:3456/books"
  // useEffect(()=>{
  //     const fetchData = async(req,res)=>{
  //  try{
  //     const response = await fetch(API_URL)
  //     if(!response.ok) throw 'Error occured while fetching data'
  //     const {data} = await response.json()
  //     console.log(data)
  //     setBooks(data)
  //  }catch(err){
  //     console.log(err.messaage)
  //  }finally{
  //     setIsLoading(false)
  //  }
  //     }
  //     setTimeout(()=>{(async()=> await fetchData())()},2000)
  // },[])
console.log('app')
  return (
  <>
   <div className="container m-auto h-screen flex flex-col">
  <div className="flex justify-between items-center m-4">
  <ul className='flex gap-2'>
      <li>
        <Link  to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/books/details/:id">Show</Link>
      </li>
      <li>
        <Link to="/books/create">Create</Link>
      </li>
      <li>
        <Link to="/books/update/:id">Update</Link>
      </li>
      <li>
        <Link to="/books/delete/:id">Delete</Link> */}
      {/* </li> */}
    </ul>
    <BackButton/>
  </div>
    <Routes>
      <Route path="/" element={
      <Home
       books = {books}   
       setBooks = {setBooks}
       isLoading = {isLoading}
       setIsLoading = {setIsLoading}
      />
      }/>
      <Route path="/books/update/:id" element={<UpdateBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      <Route path="/books/details/:id" element={<ShowBook
       isLoading = {isLoading}  
       setIsLoading = {setIsLoading}   

      />}/>
      <Route path="/books/create" element={<CreateBook
             isLoading = {isLoading}  
             setIsLoading = {setIsLoading}
      />}/>
    </Routes>
   
   </div>
    
  </>
    
  )
}

export default App