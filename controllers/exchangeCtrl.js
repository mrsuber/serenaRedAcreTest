const ErrorResponse = require('../utils/errorResponse')
const Exchange = require('../models/Exchange')

const exchangeCtrl = {
  createExchange: async (req,res,next) =>{
    try{
      //requesting data from body
      const exchange = await Exchange.create({
        Currency_from:req.body.Currency_from,
        Currency_to:req.body.Currency_to,
        Amount1:req.body.Amount1,
        Amount2:req.body.Amount2,
        Type:req.body.Type,
        });
        //returning a response if create is successfull
      res.status(200).json({success:true, data:exchange})
    }catch(err){
      res.status(500).json({msg:err.message})
      return next(new ErrorResponse(err.message, 500))
    }
  },
  getAllExchange: async(req, res,next) =>{
    try{
      // const exchange = await Exchange.find().sort({_id:-1}).limit(10)
      const exchange = await Exchange.find().sort({_id:-1})
      res.status(201).json({success:true,data:exchange})
    }catch(err){
      res.status(500).json({msg:err.message})
      return next(new ErrorResponse(err.message, 500))

    }
  },
  searchExchange: async(req,res,next)=>{
    try{
      const exchange = await Exchange.find({Type:{$regex:req.query.type}}).sort({_id:-1})
      res.status(201).json({success:true,data:exchange})
    }catch(err){
      res.status(500).json({msg:err.message})
      return next(new ErrorResponse(err.message, 500))

    }
  }

}

module.exports = exchangeCtrl
