const mongoose = require('mongoose')

const winnigSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    item_id: {
        type: mongoose.Types.ObjectId,
        ref: "Item"
    },
    winning_date: Date
})

const Winning = mongoose.model("winnings", winnigSchema)
module.exports = {
    winnigSchema
}
