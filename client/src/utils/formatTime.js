
const formatTime = (date)=>{
  let today = new Date(date)
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time
}

export default formatTime
