// let products = require('../data/database')

const express = require('express')
const { authorize } = require('../middlewares/authorization')
const controller = express.Router()
const ProductSchema = require('../schemas/productSchema')

// unsecured routes

controller.route('/').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find()
    if (list) {
        for (let product of list) {
            products.push({
                tag: product.tag,
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()


})

controller.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({ tag: req.params.tag })
    if (list) {
        for (let product of list) {
            products.push({
                tag: product.tag,
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if (list) {
        for (let product of list) {
            products.push({
                tag: product.tag,
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

// ...

controller.route('/categories/detail/:category').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({ category: req.params.category })
    if (list) {
        for (let product of list) {
            products.push({
                tag: product.tag,
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/categories/detail/:category/:take').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({ category: req.params.category }).limit(req.params.take)
    if (list) {
        for (let product of list) {
            products.push({
                tag: product.tag,
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await ProductSchema.findById(req.params.articleNumber)
    if (product) {
        res.status(200).json({
            tag: product.tag,
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating,
            imageName: product.imageName
        })
    } else
        res.status(404).json()
})



// secured routes

controller.route('/').post(authorize, async (req, res) => {
    const { name, description, category, tag, price, rating, imageName } = req.body

    if (!name || !price)
        res.status(400).json({ taxt: 'name and price is required' })

    const item_exists = await ProductSchema.findOne({ name })
    if (item_exists)
        res.status(409).json({ text: 'a product with the same name already exists' })
    else {
        const product = await ProductSchema.create({
            name,
            description,
            category,
            tag,
            price,
            rating,
            imageName
        })
        if (product)
            res.status(201).json({ text: `product with article number ${product._id} was created successfully.` })
        else
            res.status(404).json({ taxt: 'somthing went wrong when we tried to creat the product.' })
    }
})

controller.route('/:articleNumber').delete(authorize, async (req, res, next) => {
    if (!req.params.articleNumber)
        res.status(400).json('no article number was specificed.')
    else {
        const item = await ProductSchema.findById(req.params.articleNumber)
        if (item) {
            await ProductSchema.remove(item)
            res.status(200).json({ text: `product with article number ${req.params.articleNumber} was deleted successfully.` })
        } else {
            res.status(404).json({ text: `product with article number ${req.params.articleNumber} was no found.` })
        }
    }


})



controller.route('/:articleNumber').put(authorize, async (req, res) => {
    console.log("funkar ")
    try{
        const product = await ProductSchema.findById(req.params.articleNumber)
        console.log("product ", product)
        if(!product) {
            httpResponse.status(404).json()
            console.log("error ")
        } else {
            const updateProduct = await ProductSchema.findByIdAndUpdate(req.params.articleNumber, req.body, { new: true })
            res.status(200).json(product)
            console.log("Update prod ", updateProduct)
        }
    } catch {
        console.log("error catch ")
    }
    
})


module.exports = controller


