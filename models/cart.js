const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref  : "product"
    },
    name : String,
    count : Number,
    price : Number
})
const productCart = mongoose.model("productCart",productCartSchema);

module.exports = productCart