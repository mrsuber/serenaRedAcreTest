import React from 'react'
import './pagination.css'
const Pagination = ({exchangesPerPage, totalExchange, paginate}) => {
  const pageNumbers = []
  for(let i=1; i<=Math.ceil(totalExchange / exchangesPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <div className="pagination__container" >
        <ul className="pagination__ul ">
            {pageNumbers.map((number)=>(
              <li key={number}  className="pagination__li ">
                <a onClick={()=>paginate(number) } href="!#"  className="pagination__item ">
                {number}
                </a>
              </li>

            ))}
            <li className="pagination__li-prim"><span class="pagination__next">Next</span>
            <button style={{background: "none", border: 'none', borderRadius: '50%', color: 'inherit',cursor: 'pointer', lineHeight: '0', outline: 'none', padding: '0.5rem', transition: 'background 250ms ease 0s', verticalAlign: 'middle'}}>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style={{fill:'currentcolor',verticalAlign:'middle',width:'20px',height:'20px'}} data-reactid=".0.1.$23.0.0"><g data-reactid=".0.1.$23.0.0.0"><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z" data-reactid=".0.1.$23.0.0.0.0"></path></g></svg>
             </button></li>
        </ul>
    </div >
  )
}

export default Pagination
