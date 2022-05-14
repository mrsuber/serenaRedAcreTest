import React from 'react'
import './button.css'

const FilterBtn = ({type,text,onclick}) => {
  return (
    <button className="btn__filter" type={type} onClick={onclick}>{text}</button>
  )
}

export default FilterBtn
