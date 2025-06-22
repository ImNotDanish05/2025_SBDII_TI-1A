const express = require('express');
const router = express.Router();
const PaymentMethods = require('../models/PaymentMethods');

// CREATE - Tambah metode pembayaran
router.post('/', async (req, res) => {
    try {
        const { payment_method_id, method_name, description } = req.body;

        const method = new PaymentMethods({
            payment_method_id,
            method_name,
            description
        });

        const savedMethod = await method.save();
        res.status(201).json(savedMethod);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil semua metode pembayaran
router.get('/', async (req, res) => {
    try {
        const methods = await PaymentMethods.find();
        res.status(200).json(methods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Perbarui metode pembayaran berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const { payment_method_id, method_name, description } = req.body;

        const updatedMethod = await PaymentMethods.findByIdAndUpdate(
            req.params.id,
            { payment_method_id, method_name, description },
            { new: true }
        );

        if (!updatedMethod) {
            return res.status(404).json({ message: 'Payment method not found' });
        }

        res.status(200).json(updatedMethod);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus metode pembayaran berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedMethod = await PaymentMethods.findByIdAndDelete(req.params.id);
        if (!deletedMethod) {
            return res.status(404).json({ message: 'Payment method not found' });
        }

        res.status(200).json({ message: 'Payment method deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
