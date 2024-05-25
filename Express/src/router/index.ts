
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import prisma from '../lib/script';



const router = express.Router();


router.get("/", async (req, res, next) => {

    const Tet = await prisma.products.findUnique({ where: { id: 1 } })
    res.send(Tet)
})


router.get('/:model', async (req, res) => {
    console.log(req.params.model)
    const Model = req.params.model

    const result = await prisma[Model].findUnique({ where: { id: 1 } })
    // await prisma_Method(Model, help_prisma.Read.findUnique, { where: { id: 1 } }).then((result) => {
    //     res.json(result);
    // }).catch(() => {
    //     console.log(error)
    //     res.status(500).json({ error: 'An error occurred while fetching users.' });

    // })
    res.json(result)
});


module.exports = router;