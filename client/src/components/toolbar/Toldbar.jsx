import './Toldbar.css'
import {useState,useEffect} from 'react'
import {DropdownMenu,NumberInput,Button} from '../../components'

const Toldbar = ({allcoins,allcurrencies,getExchangeFromCrptoToCurencies}) =>{





  return(
    <div>
      <form className="form__wapper">
      <DropdownMenu id={1} options={allcoins} label="Currency from" />
      <NumberInput id="n1" label="Amount"/>
      <div className="form__equaltoSign">=</div>
      <DropdownMenu id={2} options={allcurrencies} label="Currency to" />
      <NumberInput id="n2" label="Amount"/>
      <Button />
      </form>
    </div>
  )
}

export default Toldbar;
