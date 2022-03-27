const Item = require("../models/item").Item;

const getAllItems = async (req, res) => {
    try {
        let item= await Item.find({});
        return res.send(item);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getItemById = async (req, res) => {
    let itemId = req.params.id;
    try {
        let item = await Item.findById(itemId);
        return res.send(item);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const addItem = async (req, res) => {
    let item = new Item(req.body);
    console.log(item)
    try {
        await item.save();
        return res.send(item);
    }
    catch (err) {
        return res.status(400).send(err);
    }   
}

const deleteItemById = async (req, res) => {
    let itemId = req.params.id;
    try {
        let item = await Item.findByIdAndDelete(itemId);
        return res.send(item);
    }
    catch (e) {
        return res.status(400).send(err);
    }
}

module.exports={getAllItems,getItemById,addItem, deleteItemById}
