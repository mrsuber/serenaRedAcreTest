import {useState} from 'react'
import './dropdown.css'
import Select, {components}from 'react-select';
const DropdownMenu2 = ({id,options,label,setValue5,value5}) => {

   const [selectedOption, setSelectedOption] = useState(null);

   // handle onChange event of the dropdown
   const handleChange = e => {


       setValue5(e)
       // console.log("v1",e)


   }

   const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 2 24 24"><path fill="currentColor" d="m12 14l-4-4h8z"/></svg>
    </components.DropdownIndicator>
  );
};

   return (
     <div className="dropdown__container">
      <label for={id} className="dropdown__lable" >{label} </label>
       <Select id={id}
        className="dropdown__select"
         placeholder="Select Option"
         components={{ DropdownIndicator }}
         value={value5}
         options={options}
         onChange={handleChange}
         selectedValue={options[0]}
         getOptionLabel={e => (
           <div style={{ display: 'flex', alignItems: 'center'}}>
             {e.icon}
             <span style={{ marginLeft: 5, marginRight:10 }}>{e.text}</span>
           </div>
         )}
       />

       {/*selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
         <b>Selected Option:</b> {selectedOption.value}
       </div>*/}
     </div>
   );
 }




export default DropdownMenu2
