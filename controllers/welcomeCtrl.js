
const ErrorResponse = require('../utils/errorResponse')


const welcomeCtrl = {
  welcomeMsg: async(req,res) =>{

    res.status(200).json({msg:"the back end is set up"})
    // res.send("your IP is: " + req.ip)
  try{

  }catch(err){
    res.status(500).json({msg:err.message})
    return next(new ErrorResponse(err.message, 500))

  }
},



}

module.exports = welcomeCtrl
