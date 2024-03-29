import React from "react";import { BiUserCircle, BiShow } from 'react-icons/bi';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';



const BookCard = ({book}) => {
    const [showModal, setShowModal] = useState(false);


return(
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl' key={book._id}>
    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
      {book.publishYear}
    </h2>
    <h4 className='my-2 text-gray-500'>{book._id}</h4>
    <div className='flex justify-start items-center gap-x-2'>
      <PiBookOpenTextLight className='text-red-300 text-2xl' />
      <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
      <BiUserCircle className='text-red-300 text-2xl' />
      <h2 className='my-1'>{book.author}</h2>
    </div>
    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
      <BiShow
        className='text-3xl text-blue-800 hover:text-black cursor-pointer'
        onClick={() => setShowModal(true)}
      />
      <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
      </Link>
      <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
      </Link>
      <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
      </Link>
    </div>
    {showModal && (
    <div
 className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
 onClick={() => setShowModal(false)}
>
 <div
   onClick={(event) => event.stopPropagation()}
   className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
 >
   <AiOutlineClose
     className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
     onClick={() => setShowModal(false)}
   />
   <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
     {book.publishYear}
   </h2>
   <h4 className='my-2 text-gray-500'>{book._id}</h4>
   <div className='flex justify-start items-center gap-x-2'>
     <PiBookOpenTextLight className='text-red-300 text-2xl' />
     <h2 className='my-1'>{book.title}</h2>
   </div>
   <div className='flex justify-start items-center gap-x-2'>
     <BiUserCircle className='text-red-300 text-2xl' />
     <h2 className='my-1'>{book.author}</h2>
   </div>
   <p className='mt-4'>Anything You want to show</p>
   <p className='my-2'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
     voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
     necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
     nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
     dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
     vitae voluptate sequi repellat!
   </p>
 </div>
</div>
    )}
  </div>
)
};

export default BookCard;
