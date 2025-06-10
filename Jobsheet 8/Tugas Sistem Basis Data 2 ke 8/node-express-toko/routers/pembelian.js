const express = require('express');
const router = express.Router();
const Pembelian = require('../models/Pembelian');

// GET semua Pembelian
router.get('/', async(req, res) => {
    const pembelian = await Pembelian.find();
    res.json(pembelian);
})

// POST Pembelian baru
router.post('/', async (req, res) => {
    try{
        const pembelian = new Pembelian(req.body);
        const saved = await pembelian.save();
        res.status(201).json(saved);
    } catch (err){
        res.status(400).json({ error: err.message })
    }
})

module.exports = router;