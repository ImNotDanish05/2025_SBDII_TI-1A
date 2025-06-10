const express = require('express');
const router = express.Router();
const Penjualan = require('../models/Penjualan');

// CREATE
router.post('/', async (req, res) => {
    try {
        const { nama, jumlah, tanggal_pembelian } = req.body;

        const penjualan = new Penjualan({
            nama,
            jumlah,
            tanggal_pembelian
        });

        const savedPenjualan = await penjualan.save();
        res.status(201).json(savedPenjualan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const penjualans = await Penjualan.find();
        res.status(200).json(penjualans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { nama, jumlah, tanggal_pembelian } = req.body;

        const updatedPenjualan = await Penjualan.findByIdAndUpdate(
            req.params.id,
            { nama, jumlah, tanggal_pembelian },
            { new: true }
        );

        if (!updatedPenjualan) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json(updatedPenjualan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedPenjualan = await Penjualan.findByIdAndDelete(req.params.id);

        if (!deletedPenjualan) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json({ message: 'Penjualan deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;