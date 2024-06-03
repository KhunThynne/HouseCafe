
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import prisma from '../lib/script';
const JSON5 = require('json5');


const router = express.Router();





router.all('/:model/:method', async (req, res) => {
    ConnectPrisma(req, res);
});



async function ConnectPrisma(req: any, res: any) {
    const Model = req.params.model
    const Method = req.params.method

    var Condition = false

    try {
        Condition = JSON5.parse(req.query.condition || '{}');
    } catch (err) {
        console.log("Condition parsing error:", err);
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