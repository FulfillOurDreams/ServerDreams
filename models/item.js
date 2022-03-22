const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    item_name:String,
    item_description:String,
    item_price:{type:Number,min:0}
})

const Item=mongoose.model("items",itemSchema);
module.exports={
    itemSchema,Item
} 