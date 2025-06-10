const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');

// CREATE
router.post('/', async (req, res) => {
    try {
        const { nama, nama_supplier, alamat, kode_pos, tanggal_pembelian } = req.body;

        const newSupplier = new Supplier({
            nama,
            nama_supplier,
            alamat,
            kode_pos,
            tanggal_pembelian
        });

        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { nama, nama_supplier, alamat, kode_pos, tanggal_pembelian } = req.body;

        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            { nama, nama_supplier, alamat, kode_pos, tanggal_pembelian } ,
            { new: true }
        );

        if (!updatedSupplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json(updatedSupplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!deletedSupplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;