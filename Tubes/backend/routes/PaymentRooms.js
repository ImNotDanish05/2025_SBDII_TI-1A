const express = require('express');
const router = express.Router();
const PaymentRooms = require('../models/PaymentRooms');

// CREATE - Tambah pembayaran kamar baru
router.post('/', async (req, res) => {
    try {
        const {
            payment_id,
            booking_id,
            payment_method_id,
            amount_paid,
            payment_date,
            payment_status
        } = req.body;

        const newPayment = new PaymentRooms({
            payment_id,
            booking_id,
            payment_method_id,
            amount_paid,
            payment_date,
            payment_status
        });

        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil semua pembayaran kamar
router.get('/', async (req, res) => {
    try {
        const payments = await PaymentRooms.find();
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Perbarui pembayaran berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const {
            payment_id,
            booking_id,
            payment_method_id,
            amount_paid,
            payment_date,
            payment_status
        } = req.body;

        const updatedPayment = await PaymentRooms.findByIdAndUpdate(
            req.params.id,
            {
                payment_id,
                booking_id,
                payment_method_id,
                amount_paid,
                payment_date,
                payment_status
            },
            { new: true }
        );

        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus pembayaran berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedPayment = await PaymentRooms.findByIdAndDelete(req.params.id);
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
