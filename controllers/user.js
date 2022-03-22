const { User } = require('../models/user');

const addUser = async (req, res) => {
    let user = new User(req.body);
    try {
        await user.save();
        return res.send(user);
    }
    catch (err) {
        return res.status(400).send(err);
    }

}

const getAllItemsByUserId = async (req, res) => {
    let userId = req.params.id;
    try {
        let arr = User.findById(userId).arr_orders;
        res.send(arr);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

const addOrder = async (req, res) => {

    User.findById(req.params.id,async function (err, result) {
        if (!err) {
            if (!result) {
                await addUser();
            }
            else {
                result.arr_orders.push(req.body.newOrder);
                await result.markModified('arr_orders');
                await result.save(function (saverr, saveresult) {
                    if (!saverr) {
                        res.status(200).send(saveresult);
                    }
                    else {
                        res.status(400).send(saverr);
                    }
                });
            }
        }
        else {
            res.status(400).send(err);
        }
    });
}

module.exports = { addUser, getAllItemsByUserId, addOrder };




