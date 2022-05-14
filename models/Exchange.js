const mongoose = require("mongoose")

const ExchangeSchema = new mongoose.Schema(
  {
    Currency_from:{type:String,required:true},
    Currency_to:{type:String,required:true},
    Amount1:{type:String,required:true},

    Amount2:{type:String,required:true},
    Type:{type:String,required:true},

},
{timestamps:true}
);

module.exports = mongoose.model("Exchange",ExchangeSchema)
