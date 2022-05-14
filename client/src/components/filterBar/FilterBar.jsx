import {useState, useEffect} from 'react'
import {DropdownMenu2,Date,FilterBtn} from '../../components'
import './filter.css'
import formatDate from '../../utils/formatDate'
import axios from 'axios'
const FilterBar = ({allExchange,setAllExchange}) => {
    const [value5,setValue5]= useState("all")
    const [value6,setValue6]= useState("")
    const [value7,setValue7]= useState("")
    const [defaultData, setDefaultData]=useState([])
    let dropdownData = [
      {
          text:"All",value:"all"
      },
      {
          text:"Exchanged",value:"exchanged"
      },
      {
          text:"Live price",value:"live_price"
      }


    ]
    useEffect(()=>{
      setAllExchange(defaultData)
    },[defaultData])



    const handleFilter = async(e) => {
      e.preventDefault()
      if(value5.value==="all"){
        const res= await axios.get("/api/getAllExchange");
       setAllExchange(res.data.data)
      }else{
        const config = {header:{"Content-Type":"application/json",}}
      const res = await axios.get(`/api/searchExchange?type=${value5.text}`,config)
      // console.log(res.data.data)
      setAllExchange(res.data.data)
      }

      if(value6!=="" && value7!==""){
        let filteredData=[]

       let v6 = formatDate(value6)
       let v7 = formatDate(value7)

       for(let i=0; i<allExchange.length;i++){

         let date = formatDate(allExchange[i].createdAt)
         if(date=== v7 || date===v6){
           filteredData.push(allExchange[i])
           // console.log("i see ")
         }

       }

       setAllExchange(filteredData)
       setValue5("")
       setValue6("")
       setValue7("")

      }

      }
      const reset = async()=>{
        const res= await axios.get("/api/getAllExchange");
       setAllExchange(res.data.data)
      }

  return (
    <div className="filter-form__wrapper">
      <form className="form__wapper2" onSubmit={handleFilter}>
      <Date id={6} label="From Date" value6={value6} setValue6={setValue6} />
      <Date id={7} label="From Date" value7={value7} setValue7={setValue7} />
      <DropdownMenu2 id={5} options={dropdownData} label="Type" value5={value5} setValue5={setValue5}/>
      <FilterBtn text="Reset" onclick={reset} />
      <FilterBtn type="submit" text="Filter"/>
      </form>
    </div>
  )
}

export default FilterBar
