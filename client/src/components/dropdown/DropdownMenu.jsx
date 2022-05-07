import React from 'react'

const DropdownMenu = ({id,options,label}) => {
  return (<>

      <label for={id} className="dropdown__lable" >{label} </label>
      <select id ={id}  >

      {options.map((item,i) =>(
          <option key={i} value={item}>
          {item}
          </option>
      ))}
      </select>

    </>
  )
}

export default DropdownMenu
