const express = require('express');
const router = express.Router();
const Barang = require('../models/Barang');

// CREATE
router.post('/', async (req, res) => {
    try{
        const { nama, harga_beli, harga_jual, jenis_barang, stok, deskripsi } = req.body;

        const barang = new Barang({
            nama,
            harga_beli,
            harga_jual,
            jenis_barang,
            stok,
            deskripsi
        });
        const savedBarang = await barang.save();
        res.status(201).json(savedBarang);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const barangs = await Barang.find();
        res.status(200).json(barangs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { nama, harga_beli, harga_jual, jenis_barang, stok, deskripsi } = req.body;
        const updatedBarang = await Barang.findByIdAndUpdate(
            req.params.id,
            { nama, harga_beli, harga_jual, jenis_barang, stok, deskripsi },
            { new: true }
        );
        if (!updatedBarang) {
            return res.status(404).json({ message: 'Barang not found' });
        }
        res.status(200).json(updatedBarang);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedBarang = await Barang.findByIdAndDelete(req.params.id);
        if (!deletedBarang) {
            return res.status(404).json({ message: 'Barang not found' });
        }
        res.status(200).json({ message: 'Barang deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;