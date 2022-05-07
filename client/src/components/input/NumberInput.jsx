import React from 'react'

const NumberInput = ({id,label}) => {
  return (
    <>
    <label for={id} className="dropdown__lable" >{label} </label>
    <input id={id} type="number"/>
    </>
  )
}

export default NumberInput
