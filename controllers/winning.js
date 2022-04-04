const Winning = require("../models/winning").Winning;
const Item = require("../models/item").Item;
const { User } = require('../models/user')

const addwinning = async (req, res) => {

    try {
        let win = new Winning(req.body);
        await win.save();
        return res.send(win);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}
const getWinnerByCode = async (req, res) => {
    let code = req.params.id;
    try {
        let win = await Winning.findById(code);
        return res.send(win);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}
const winnerbyproductcode = async (req, res) => {
    let code = req.params.id;
    try {
        let win = await Winning.find({ item_id: code });
        return res.send(win);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}
const alluserbyproductcode = async (req, res) => {
    let code = req.params.id;
    console.log(code)
    try {
        let users = await User.find()//.filter(user => { user.arr_orders.find(order => order.item_id == code) != -1 })
        
        users.filter(user =>  user.arr_orders.findIndex(order => order.item_id == code) != -1 )
        console.log(users)
        return res.send(users);
    }
    catch (err) {
        console.log(err)
        return res.status(400).send(err)
    }
}
module.exports = {
    addwinning, getWinnerByCode, winnerbyproductcode, alluserbyproductcode
}
