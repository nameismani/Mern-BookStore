import React from "react";
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import BookCard from "./BookCard";


import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';


const BooksCard = ({books}) => {
console.log('book')
  return (
    <>
     <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((book) => (
          <BookCard book = {book} key = {book._id}/>
      ))}
    </div>
    </>
  )
};

export default BooksCard;
