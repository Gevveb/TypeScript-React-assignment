require('dotenv').config()
const port = process.env.PORT || 5001
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongodb = require('./mongodb_server')

// middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

// routes/controllers


app.use('/api/products', require('./controllers/productsController'))
app.use('/api/authentication', require('./controllers/authenticationController'))

// const productsController = require('./controllers/productsController')
// app.use('/api/products', productsController)

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

// const categoryController = require('./controllers/categoryController')
// app.use('/api/category', categoryController)

// const newProductsController = require('./controllers/newProductsController')
// app.use('/api', newProductsController)


mongodb()
app.listen(port, () => console.log(`web api is runnig on http://localhost:${port}`))