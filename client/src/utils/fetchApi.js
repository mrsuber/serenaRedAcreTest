import axios from 'axios'



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

export const getCrypto = async()=>{


const options = {
method: 'GET',
url: 'https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/coin_map.json',
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



export const getCurencies = async()=>{
//   const options = {
//   method: 'GET',
//   url: 'https://currencyapi-net.p.rapidapi.com/currencies',
//   params: {output: 'JSON'},
//   headers: {
//     'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com',
//     'X-RapidAPI-Key': '71c87e772emshac10e117b64699ap103d42jsnf97038ee55de'
//   }
// };

const options = {
method: 'GET',
url: 'https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json',
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
