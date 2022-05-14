import {useEffect,useState} from 'react'
import axios from 'axios'
import {csv} from 'd3'


const Coinurl = "https://raw.githubusercontent.com/mrsuber/SVG-css-colors/master/crypto.csv"
const Currencyurl = "https://raw.githubusercontent.com/mrsuber/SVG-css-colors/master/curency.csv"



export const getCrypto = async ()=>{
    let array = [];
    const res =await csv(Coinurl)
    for(let i=0;i<res.length;i++){
      array.push({text: `${res[i].symbol}`+` - `+`${res[i].name}`, value:res[i].symbol, icon:<img src={res[i].img_url} style={{width:"16px",height:"16px",margin:"0 5px"}}/>})
    }
    return array;
}

export const getCurencies = async ()=>{
    let array = [];
    const res =await csv(Currencyurl)
    for(let i=0;i<res.length;i++){
      array.push({text: `${res[i].code}`+` - `+`${res[i].name}`, value:res[i].code, icon:<img src={res[i].icon} style={{width:"16px",height:"16px",margin:"0 5px"}}/>})
    }
    return array;
}



export const getExchangeFromCrptoToCurency = async(obj)=>{
const options = {
method: 'GET',
url: `https://api.exchangerate.host/convert?from=${obj.currencyFrom}&to=${obj.currencyTo}&amount=${obj.amount}`,
params: {output: 'JSON'},
headers: {
}
};

  try{
    const res = await axios.request(options)
    return res

  }catch(err){
    console.log(err)
  }

}
