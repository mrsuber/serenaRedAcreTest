import './Toldbar.css'
import {useState,useEffect} from 'react'
import {DropdownMenu,NumberInput,Button,Table} from '../../components'

const Toldbar = ({allcoins,allcurrencies,getExchangeFromCrptoToCurencies2,allExchange, setAllExchange}) =>{
  const [value1,setValue1]= useState("")
  const [value2,setValue2]= useState("")
  const [value3,setValue3]= useState("")
  const [value4,setValue4]= useState("")
  const [checkstatus1,setcheckStatus1] = useState(false)
  const [checkstatus2,setcheckStatus2] = useState(false)
  useEffect(()=>{

    if(value2===""){
      setcheckStatus2(false)
    }else setcheckStatus2(true)
    if(value4===""){
      setcheckStatus1(false)
    }else setcheckStatus1(true)
  },[checkstatus1,checkstatus2,value2,value4])

// console.log({v1:value1,v2:value2,v3:value3,v4:value4})

const runSubmit = (e)=>{
    e.preventDefault()
    let valueFrom = ""
    let valueTo = ""
    let valueAmount=""
    if(value2==="" && value4!==""){
      valueFrom=value3.value
      valueTo=value1.value
      valueAmount=value4
    }
    if(value4===""&& value2!==""){
      valueFrom = value1.value
      valueTo=value3.value
      valueAmount=value2
    }

  let obj={
    currencyFrom:valueFrom,
    currencyTo:valueTo,
    amount:valueAmount
  }

getExchangeFromCrptoToCurencies2(obj)
setValue1("")
setValue2("")
setValue3("")
setValue4("")
}

  return(
    <div className="toolkid_container">
    <div className="toolkid-form__wrapper">
      <h2 className="toolkid__heading">Exchange</h2>
      <form className="form__wapper" onSubmit={runSubmit}>
      <DropdownMenu id={1} options={allcoins} label="Currency from" value1={value1} setValue1={setValue1} />
    <NumberInput id={2} label="Amount" setValue2={setValue2} value2={value2} disableding={checkstatus1} placeholder="Enter The Amount"/>
      <div className="form__equaltoSign">=</div>
      <DropdownMenu id={3} options={allcurrencies} label="Currency to" setValue3={setValue3}  value3={value3}/>
      <NumberInput id={4} label="Amount" setValue4={setValue4} value4={value4} disableding={checkstatus2} placeholder="Enter The Amount"/>
      <Button type="submit"/>
      </form>
      </div>

      <Table allExchange={allExchange} setAllExchange={setAllExchange}/>
    </div>
  )
}

export default Toldbar;
