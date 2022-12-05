const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// middleware

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

// routes/controllers
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

const categoryController = require('./controllers/categoryController')
app.use('/api/category', categoryController)

const newProductsController = require('./controllers/newProductsController')
app.use('/api/mange', newProductsController)


app.listen(port, () => console.log(`web api is runnig on http://localhost:${port}`))