import React,{useState,useEffect} from 'react'
import './table.css'
import formatDate from '../../utils/formatDate'
import formatTime from '../../utils/formatTime'
import {FilterBar,Pagination} from '../../components'

const Table = ({allExchange,setAllExchange}) => {
  //pagination
  // const [posts,setPosts] = useState([])
  // const [loading, setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1);
  const [exchangesPerPage, setExchangesPerPage] = useState(10)

  //get current exchange
  const indexOfLastExchange = currentPage * exchangesPerPage
  const indexOfFirstExchange = indexOfLastExchange - exchangesPerPage
  const currentExchanges = allExchange.slice(indexOfFirstExchange,indexOfLastExchange)
  //change page
  const paginate= (pageNumbers)=>setCurrentPage(pageNumbers)
  return (
    <>
<div className="table__container">
<h2 className="table__heading">History</h2>
<FilterBar allExchange={allExchange} setAllExchange={setAllExchange} />
<table className="table__container2">
  <tr className="tr__heading">
    <th className="th__timeandDate">Date & Time</th>
    <th>Currency From</th>
    <th>Amount 1</th>
    <th>Currency To</th>
    <th>Amount 2</th>
    <th>Type</th>
  </tr>
  {
    allExchange.length>0
    ?currentExchanges.map((item,i)=>(
      <tr>
      <td>{formatDate(item.createdAt)+'  '+formatTime(item.createdAt)}</td>
      <td>{item.Currency_from}</td>
      <td>{item.Amount1}</td>
      <td>{item.Currency_to}</td>
      <td>{item.Amount2}</td>
      <td className={item.Type === "Exchanged"? "color1":"color2"}>{item.Type}</td>
      </tr>
    )):<>No Data Found</>
  }


</table>
<Pagination exchangesPerPage={exchangesPerPage} totalExchange={allExchange.length} paginate={paginate}/>
</div>
</>

  )
}

export default Table
