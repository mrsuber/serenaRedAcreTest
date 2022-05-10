import React from 'react'
import './number.css'
const NumberInput = ({id,label}) => {
  return (
    <>
    <div className="number__input">
    <label for={id} className="dropdown__lable" >{label} </label>
    <input id={id} type="number"/>
    </div>
    </>
  )
}

export default NumberInput
