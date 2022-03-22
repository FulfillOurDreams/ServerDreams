const mongoose = require("mongoose")
const orderSchema = require('./Order').orderSchema

const userSchema = new mongoose.Schema({
    user_first_name: String,
    user_last_name: { type: String, validate: /[a-zA-Z]/ },
    user_phone: { type: String, validate: /[0-3]{7-10}/ },
    arr_orders: [orderSchema]
}) 

const User = mongoose.model("users", userSchema)
module.exports={
    User, userSchema
}
