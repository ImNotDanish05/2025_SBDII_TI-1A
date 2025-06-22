const express = require('express');
const router = express.Router();
const Guests = require('../models/Guests');

// CREATE - Tambah tamu baru
router.post('/', async (req, res) => {
    try {
        const { guest_id, name, email, phone_number, address } = req.body;

        const guest = new Guests({
            guest_id,
            name,
            email,
            phone_number,
            address
        });

        const savedGuest = await guest.save();
        res.status(201).json(savedGuest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil semua data tamu
router.get('/', async (req, res) => {
    try {
        const guests = await Guests.find();
        res.status(200).json(guests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Perbarui tamu berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const { guest_id, name, email, phone_number, address } = req.body;

        const updatedGuest = await Guests.findByIdAndUpdate(
            req.params.id,
            { guest_id, name, email, phone_number, address },
            { new: true }
        );

        if (!updatedGuest) {
            return res.status(404).json({ message: 'Guest not found' });
        }

        res.status(200).json(updatedGuest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus tamu berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedGuest = await Guests.findByIdAndDelete(req.params.id);
        if (!deletedGuest) {
            return res.status(404).json({ message: 'Guest not found' });
        }

        res.status(200).json({ message: 'Guest deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
