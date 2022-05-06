require('dotenv').config({path:"./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')


//connectDB
connectDB();

const app = express();

//Error unhandler(should be last piece of middleware)
app.use(errorHandler)

//connecting routes
app.use('/api',require('./routes/welcomeRouter'))


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'/client/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))

  })
}else{
  app.get('/', (req,res)=>{
    res.send('Api running');
  })
}

const http = require('http').createServer(app)
const PORT = process.env.PORT || 5000;

const server = http.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))


process.on('unhandleRejection', (err,promise) =>{
  console.log(`Logged Error:${err}`)
  server.close(()=>process.exit(1))
})
