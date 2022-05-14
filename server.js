require('dotenv').config({path:"./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const path = require('path');
const SocketServer = require('./socketServer')

//connectDB
connectDB();

const app = express();
app.use(express.json())
//Error unhandler(should be last piece of middleware)
app.use(errorHandler)


//Socket
const http = require('http').createServer(app)
const io = require('socket.io')(http)


io.on('connection',socket => {
  console.log(socket.id + ' Connected 👌')
  SocketServer(socket)
})

//connecting routes

app.use('/api',require("./routes/exchange"))


//checking config for what to deploy after server runs
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

//starting server
const PORT = process.env.PORT || 5000;

const server = http.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))

//handle crash error form server
process.on('unhandleRejection', (err,promise) =>{
  console.log(`Logged Error:${err}`)
  server.close(()=>process.exit(1))
})
