import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'



const controller = express.Router()
console.log(process.env.SQL_USER)

controller.use((req, res, next) => {
    if (req.headers['secret-key'] === process.env.SECRET_KEY) return next()
    res.sendStatus(401)
})

controller.use(require('./router'))


module.exports = controller