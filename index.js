const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const itemController = require('./controllers/item')
const userConroller = require('./controllers/user');
const winningConroller = require('./controllers/winning');

mongoose.connect('mongodb://localhost:27017/FulfillOurDreams')
.then(success=>console.log('mongodb connected'))
.catch(error=>console.log(error))

const app = express();

app.use(express.json())
app.use(cors())
app.get('/user',userConroller.getAllItemsByUserId)
app.get('/winning/:id', winningConroller.getWinnerByCode)
app.get('/winning/getUserSubscribe/:id',winningConroller.alluserbyproductcode)
app.get('/winning/getWinner/:id',winningConroller.winnerbyproductcode)
app.get('/item',itemController.getAllItems)
app.get('/item/:id',itemController.getItemById)
app.delete('/item/:id',itemController.deleteItemById)
app.post('/user',userConroller.addUser)
app.post('/user/order/:id',userConroller.addOrder)
app.post('/winning',winningConroller.addwinning)
app.post('/item',itemController.addItem)

app.listen(4500, () => { console.log('listening') })
