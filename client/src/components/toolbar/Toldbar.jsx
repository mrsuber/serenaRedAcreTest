import './Toldbar.css'
import {DropdownMenu,NumberInput} from '../../components'

const Toldbar = () =>{
  let option1 = [
    "Bitcoin","Bitcoin2","Bitcoin3"
  ]
  let option2 = [
    "USD","EU","FR"
  ]
  return(
    <div>
      <form className="form__wapper">
      <DropdownMenu id={1} options={option1} label="Currency from" />
      <NumberInput id="n1" label="Amount"/>
      <div className="form__equaltoSign">=</div>
      <DropdownMenu id={2} options={option2} label="Currency to" />
      <NumberInput id="n2" label="Amount"/>
      </form>
    </div>
  )
}

export default Toldbar;
