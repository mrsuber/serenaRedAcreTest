import React,{useEffect,useState} from 'react'
import {Toldbar} from './components'
import {getCurencies,getCrypto,getExchangeFromCrptoToCurency} from './utils/fetchApi'


function App() {
  const [allCrypto, setAllCrpto] = useState([])
  const [allCurencies, setAllCurencies]= useState([])
  const [exchangeRate, setExchangeRate]= useState([])


  useEffect(()=>{

    const getAllCryptoCoins = async() =>{
      const response = await getCrypto()
    setAllCrpto(response.data)
    }

    const getAllCurrencies = async() =>{
      const response = await getCurencies()
    setAllCurencies(response.data)
    }

    const getExchangeFromCrptoToCurencies = async(obj) =>{
      const response = await getExchangeFromCrptoToCurency(obj)
    setExchangeRate(response.data)
    }
    let data ={
      currencyFrom:"BTC",
      currencyTo:"USD",
      amount:"1"}
    getExchangeFromCrptoToCurencies(data)
    getAllCryptoCoins()
    getAllCurrencies()

  },[])
  console.log({crypto:allCrypto,currency:allCurencies,exchangeRate:exchangeRate})

  return (
    <div className="App">
      <Toldbar />
    </div>
  );
}

export default App;
