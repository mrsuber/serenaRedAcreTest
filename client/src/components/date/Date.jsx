import React from 'react'

const Date = ({id,label,setValue6,setValue7,value6,value7}) => {
  return (
    <>
    <div className="number__input">
    <label htmlFor={id} className="dropdown__lable" >{label} </label>
    <input id={id} type="date"  value={id===7?value7:value6} onChange={id===7?(e)=>setValue7(e.target.value):(e)=>setValue6(e.target.value)}/>
    </div>
    </>
  )
}

export default Date
