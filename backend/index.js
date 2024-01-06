const express = require('express')
const PORT = require('./config')
const bookroute = require('./routes/bookroute')
const mongoose = require('./database/mongosh')
const bookModel = require('./database/bookmodel')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))
// app.use(cors({
//     origin:'http://localhost:3000',
//     method:['GET','POST','PATCH','PUT','DELETE'],
//     allowHeaders:['Content-Type']
// }))



// app.set('db',mongoose)
app.set('bookmodel',bookModel)

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url} `)
    next()
})

app.use('/', bookroute)

app.listen(PORT,(err)=>{
    if(err){
        console.log('some error occured') 
        return
    }
    console.log(`your app is runnin on port ${PORT}`)
})

module.exports = app