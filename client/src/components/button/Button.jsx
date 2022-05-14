import React from 'react'
import './button.css'
const Button = ({type}) => {
  return (
    <button className="btn__primary" type={type}>Save</button>
  )
}

export default Button
