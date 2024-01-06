const express = require('express')
const router = express.Router()
const {addBook,fetchBookById,fetchBooks,updateBookById,deleteBookById} = require('../controller/bookcontroller')


router.route('/')
.get((req,res)=>{
    res.status(222).send('Hi')
})
.post(addBook)

router.route('/books')
.get(fetchBooks)

router.route('/books/:id')
.get( fetchBookById)
.patch(updateBookById)
.delete(deleteBookById)

module.exports = router