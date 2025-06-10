const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');

// GET semua supplier
router.get('/', async(req, res) => {
    const supplier = await Supplier.find();
    res.json(supplier);
})

// POST supplier baru
router.post('/', async (req, res) => {
    try{
        const supplier= new Supplier(req.body);
        const saved = await supplier.save();
        res.status(201).json(saved);
    } catch (err){
        res.status(400).json({ error: err.message })
    }
})

module.exports = router;