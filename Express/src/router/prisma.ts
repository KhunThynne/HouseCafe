
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import prisma from '../lib/script';
const JSON5 = require('json5');


const router = express.Router();


router.get("/", async (req, res, next) => {

    const Tet = await prisma.products.findMany()
    res.send(Tet)
})


// prisma.cart_items.findUnique
router.get('/:model/:method', async (req, res) => {
    ConnectPrisma(req, res)

});

router.post('/:model/:method', async (req, res) => {
    ConnectPrisma(req, res)
});


async function ConnectPrisma(req: any, res: any) {
    const Model = req.params.model
    const Method = req.params.method

    var Condition = false
    console.log(Method)
    try {
        Condition = JSON5.parse(req.query.condition);
        console.log(Condition)
    } catch (err) {

        console.log("Uncondition")
    }

    try {

        const result = await prisma[Model][Method](Condition);
        res.json(result);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'An error occurred while fetching the product.' });
    }
}

module.exports = router;