import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SocketContext} from './context/socket';


const SocketClient = () => {
  const socket = useContext(SocketContext);
  // connecting
  useEffect(()=>{
    socket.emit('jionExchange',1)
  },[socket])

  // updating exchanges
  useEffect(()=>{
    socket.on('createExchangeToClient',newExchange=>{
      console.log("newExchange",newExchange)
    })
  },[socket])



  return <></>
}

export default SocketClient
