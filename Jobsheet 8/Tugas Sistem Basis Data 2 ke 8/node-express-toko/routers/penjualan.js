const express = require('express');
const router = express.Router();
const Penjualan = require('../models/Penjualan');

// GET semua penjualan
router.get('/', async(req, res) => {
    const penjualan = await Penjualan.find();
    res.json(penjualan);
})

// POST penjualan baru
router.post('/', async (req, res) => {
    try{
        const penjualan= new Penjualan(req.body);
        const saved = await penjualan.save();
        res.status(201).json(saved);
    } catch (err){
        res.status(400).json({ error: err.message })
    }
})

module.exports = router;