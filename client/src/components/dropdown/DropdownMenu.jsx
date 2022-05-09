import {useState} from 'react'

import Select from 'react-select';
const DropdownMenu = ({id,options,label}) => {

   const [selectedOption, setSelectedOption] = useState(null);

   // handle onChange event of the dropdown
   const handleChange = e => {
     setSelectedOption(e);
   }

   return (
     <div className="App">
      <label for={id} className="dropdown__lable" >{label} </label>
       <Select id={id}
         placeholder="Select Option"
         value={selectedOption}
         options={options}
         onChange={handleChange}
         selectedValue={options[0]}
         getOptionLabel={e => (
           <div style={{ display: 'flex', alignItems: 'center' }}>
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




export default DropdownMenu
