const mongoose = require ('mongoose');
const { ObjectId } = mongoose.Schema;
const productSchema = new mangoose.Schema({
    name:{type:String, trim:true, require:true, maxlenth:32},
    image:{type:String, required:true},
    description:{type:String, trim:true, require:true, maxlength:2000},
    price:{type:Number, trim:true, require : true, },
    category :{type: ObjectId, ref:"Catgory", required:true},
    stock:{type:Number},
},
{timestamps:true}
);
module.exports =mongoose.model("product",productSchema)