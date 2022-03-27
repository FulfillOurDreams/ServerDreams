const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    name:String,
    description:String,
    price:{type:Number,min:0},
    image:String,
})

const Item=mongoose.model("items",itemSchema);
module.exports={
    itemSchema,Item
} 