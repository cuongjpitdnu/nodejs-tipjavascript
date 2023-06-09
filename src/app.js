const compression = require('compression')
const express = require('express')
const {default:helmet} = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get('/', (req, res, next) => {
    const strCompress = "Hello Nodejs"
    return res.status(200).json({
        message: "Wellcome",
        metadata: strCompress.repeat(100000)
    })
})
// handing error

module.exports = app