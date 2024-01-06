const{format} =  require('date-fns');
const addBook =  async (req,res)=>{
    console.log(req.body)

 try{
if(!req.body.title || !req.body.author || !req.body.publishYear ){
    res.status(400).json({
        message:'required all field'
    })
    return
}
const newBook = {
    title:req.body.title,
    author:req.body.author,
    publishYear:req.body.publishYear
}

const book = await req.app.get('bookmodel').create(newBook)
res.status(200).send(book)

}catch(err){
    console.log(err)
    res.status(500).send(err.message)
}

}

const fetchBooks = async (req,res)=>{
   
    try{
     const book = await req.app.get('bookmodel').find()
    //  console.log(book)
     res.status(200).json({
         count:book.length,
         status:200,
         data:book
     })
    }catch(err){
      res.status(400).json({
        status:400,
         messaage:err.message
      })
    }
 }

 const fetchBookById = async (req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        const book = await req.app.get('bookmodel').findById(id)
        // const book = await req.app.get('bookmodel').findById(id).select({author:1,title:1,_id:0})
       
        const formatedData = {...book._doc,createdAt:format(new Date(book.createdAt),'MMMM dd, yyyy pp'),updatedAt:format(new Date(book.updatedAt),'MMMM dd, yyyy pp')}
        // const formatedData = {...book._doc,}
        console.log(formatedData)
        if(book){
            res.status(200).json({
                status:200,
                data:formatedData
            })
        }else{
            res.status(400).json({
                status:400,
              message:'No data avaliable in db'
            })
        }
    }catch(err){
        res.status(400).json({
            status:400,
            messaage:err.message,
            message2:'No data avaliable in db'
         })
    }

}

const updateBookById = async(req,res)=>{
    const {author} = req.body
    const {id} = req.params
    try{
        // const book = await req.app.get('bookmodel').findById(id)
     
const update = { author:author };

// `doc` is the document _after_ `update` was applied because of
// `new: true`
const UpdateData = await req.app.get('bookmodel').findByIdAndUpdate(id, update)
if(UpdateData){
    res.status(200).json({
        status:200,
        data:UpdateData,
       
     })
}else{
    res.status(400).json({
        status:200,
        message:"No data found"
    })
}
    }catch(err){
        console.log(err)
        res.status(400).json({
            status:400,
            messaage:err.message,
         })
    }
}

const deleteBookById = async(req,res)=>{
    const {id} = req.params
    try{
        const deleteData = await req.app.get('bookmodel').findByIdAndDelete(id)
        if(deleteData){
            res.status(200).json({
                status:200,
                message:"Data deleted successfully"
            })
        }else{
            res.status(400).json({
                status:400,
                message:"Data not found"
            })
        }
    }catch(err){
        console.log(err)
        res.status(400).json({
            status:400,
            messaage:err.message,
         })
    }
}

module.exports = {
    addBook,
    fetchBooks,
    fetchBookById,
    updateBookById,
    deleteBookById
}