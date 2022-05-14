import React,{useEffect,useState} from 'react'
import {Toldbar} from './components'
import {SocketContext, socket} from './context/socket';
import {getCurencies,getCrypto,getExchangeFromCrptoToCurency} from './utils/fetchApi'
import axios from 'axios'
import SocketClient from './SocketClient'



function App() {
  const [allCrypto, setAllCrpto] = useState([])
  const [allCurencies, setAllCurencies]= useState([])
  const [allExchange, setAllExchange] = useState([])
  const [num, setnum] = useState(1)



  useEffect(()=>{


      if(num>0){
          getAllExchange()

        }
      const getAllCryptoCoins = async() =>{
            const response = await getCrypto()
            setAllCrpto(response)}

      const getAllCurrencies = async() =>{
            const response = await getCurencies()
            setAllCurencies(response)}
    getAllCryptoCoins()
    getAllCurrencies()
  },[num])

  const getExchangeFromCrptoToCurencies = async(obj) =>{
        const response = await getExchangeFromCrptoToCurency(obj)
        let mainData={
            Currency_from:response.data.query.from,
            Currency_to:response.data.query.to,
            Amount1:response.data.query.amount.toString(),
            Amount2:response.data.result.toString(),
            Type:"Live price" }
        const config = {header:{"Content-Type":"application/json",}}
        try{
            const res= await axios.post("/api/createExchange",mainData,config);
            setnum(num+1)
          }catch(error){
                console.log(error) }
  }


  const getExchangeFromCrptoToCurencies2 = async(obj) =>{
    const response = await getExchangeFromCrptoToCurency(obj)
    let mainData={
      Currency_from:response.data.query.from,
      Currency_to:response.data.query.to,
      Amount1:response.data.query.amount.toString(),
      Amount2:response.data.result.toString(),
      Type:"Exchanged"
    }
    socket.emit("aboutToCreateExchange",mainData)
    const config = {
      header:{"Content-Type":"application/json",}
    }

    try{
       const res= await axios.post("/api/createExchange",mainData,config);
       setnum(num+1)
      }catch(error){
        console.log(error) }
        }

  const getAllExchange = async()=>{

    try{
         const res= await axios.get("/api/getAllExchange");
        // console.log("response after getting exchanes",res.data.data)
        setAllExchange(res.data.data)
    }catch(error){
        console.log(error)
    }
  }

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  let randomExchangeArr = [

    {
      currencyFrom:"BTC",
      currencyTo:"USD",
      amount:"1"
    },
    {
      currencyFrom:"BTC",
      currencyTo:"EUR",
      amount:"1"
    },
    {
      currencyFrom:"ETH",
      currencyTo:"USD",
      amount:"1"
    },
    {
      currencyFrom:"ETH",
      currencyTo:"EUR",
      amount:"1"
    },
  ]
  useEffect(() => {
      // setAllExchangeDisplay(allExchange)
  const interval = setInterval(() => {
    // console.log('This will be called every 20 seconds');
    getExchangeFromCrptoToCurencies(randomExchangeArr[getRandomInt(3)])
    getAllExchange()

  }, 200000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
      {<SocketClient/>}

      <Toldbar  allcoins={allCrypto} allcurrencies={allCurencies} getExchangeFromCrptoToCurencies2={getExchangeFromCrptoToCurencies2} getExchangeFromCrptoToCurencies={getExchangeFromCrptoToCurencies} allExchange={allExchange} setAllExchange={setAllExchange}/>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
