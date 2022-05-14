import React from 'react'
import './number.css'
const NumberInput = ({id,label,setValue2,setValue4,value2,value3,disableding=false,placeholder}) => {
  return (
    <>
    <div className="number__input">
    <label htmlFor={id} className="dropdown__lable" >{label} </label>
    <input id={id} type="number" value={id===2?value2:value3} disabled={disableding} placeholder={placeholder} onChange={id===2?(e)=>setValue2(e.target.value):(e)=>setValue4(e.target.value)}/>
    </div>
    </>
  )
}

export default NumberInput
