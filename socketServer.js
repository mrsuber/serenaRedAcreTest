let exchanges=[]

const SocketServer = (socket) => {
  //Connect - Disconnect
  socket.on('jionExchange', id=>{
    exchanges.push({id,socketId:socket.id})

  })

  socket.on('disconnect', ()=>{
    exchanges = exchanges.filter(exchange=> exchange.socketId !== socket.id)
    console.log(exchanges)
  })
//checking on changes form clicking save button to exchange currencies
  socket.on('aboutToCreateExchange', newExchange=>{
    // console.log(exchanges)
    socket.to(exchanges.socketId).emit('createExchangeToClient',newExchange)

  })
}

module.exports = SocketServer
