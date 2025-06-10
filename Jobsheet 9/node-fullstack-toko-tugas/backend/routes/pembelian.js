const express = require('express');
const router = express.Router();
const Pembelian = require('../models/Pembelian');

// CREATE
router.post('/', async (req, res) => {
    try {
        const { nama, jumlah, supplier, tanggal_pembelian } = req.body;

        const pembelian = new Pembelian({
            nama,
            jumlah,
            supplier,
            tanggal_pembelian
        });

        const savedPembelian = await pembelian.save();
        res.status(201).json(savedPembelian);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const pembelians = await Pembelian.find();
        res.status(200).json(pembelians);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { nama, jumlah, supplier, tanggal_pembelian } = req.body;

        const updatedPembelian = await Pembelian.findByIdAndUpdate(
            req.params.id,
            { nama, jumlah, supplier, tanggal_pembelian },
            { new: true }
        );

        if (!updatedPembelian) {
            return res.status(404).json({ message: 'Pembelian not found' });
        }

        res.status(200).json(updatedPembelian);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedPembelian = await Pembelian.findByIdAndDelete(req.params.id);
        if (!deletedPembelian) {
            return res.status(404).json({ message: 'Pembelian not found' });
        }
        res.status(200).json({ message: 'Pembelian deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;