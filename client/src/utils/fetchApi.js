import {useEffect,useState} from 'react'
import axios from 'axios'
import {csv} from 'd3'


const Coinurl = "https://raw.githubusercontent.com/mrsuber/SVG-css-colors/master/crypto.csv"
const Currencyurl = "https://raw.githubusercontent.com/mrsuber/SVG-css-colors/master/curency.csv"


// points on wordMap data
export const getCrypto = async ()=>{
    let array = [];
    const res =await csv(Coinurl)

    for(let i=0;i<res.length;i++){
      array.push({text: res[i].name, value:res[i].symbol, icon:<img src={res[i].img_url} style={{width:"16px",height:"16px",margin:"0 5px"}}/>})
    }

  return array;
}

export const getCurencies = async ()=>{
    let array = [];
    const res =await csv(Currencyurl)

    for(let i=0;i<res.length;i++){
      array.push({text: res[i].code, value:res[i].code, icon:<img src={res[i].icon} style={{width:"16px",height:"16px",margin:"0 5px"}}/>})
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

export const getCrypto2 = async()=>{


const options = {
method: 'GET',
// url: 'https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/coin_map.json',
url:'https://raw.githubusercontent.com/mrsuber/SVG-css-colors/master/crypto.csv',
params: {output: 'JSON'},
headers: {
}
};
  try{
    let array = []
    const res = await axios.request(options)
    console.log(res.data)

      for(let i=0;i<res.data.length;i++){
        array.push({label: res.data[i].symbol, value:res.data[i].symbol, })
      }


    return array

  }catch(err){
    console.log(err)
  }

}



export const getCurencies2 = async()=>{

const options = {
method: 'GET',
url: 'https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json',
params: {output: 'JSON'},
headers: {
}
};
  try{
    let array = [];
    const res = await axios.request(options)

    //
    // for(let i=0;i<res.length;i++){
    //   array.push({text: res[i].symbol, value:res[i].symbol, icon:<img src={res[i].img_url} style={{width:"16px",height:"16px"}}/>})
    // }
    console.log("currencies",res.data)
    return res


  }catch(err){
    console.log(err)
  }

}
