const express = require('express');
const router = express.Router();
const Rooms = require('../models/Rooms');

// CREATE - Tambah data kamar
router.post('/', async (req, res) => {
    try {
        const {
            room_id,
            room_type,
            price,
            availability,
            bed_count,
            image
        } = req.body;

        const room = new Rooms({
            room_id,
            room_type,
            price,
            availability,
            bed_count,
            image
        });

        const savedRoom = await room.save();
        res.status(201).json(savedRoom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil semua data kamar
router.get('/', async (req, res) => {
    try {
        const rooms = await Rooms.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Perbarui data kamar berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const {
            room_id,
            room_type,
            price,
            availability,
            bed_count,
            image
        } = req.body;

        const updatedRoom = await Rooms.findByIdAndUpdate(
            req.params.id,
            {
                room_id,
                room_type,
                price,
                availability,
                bed_count,
                image
            },
            { new: true }
        );

        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json(updatedRoom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus data kamar berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedRoom = await Rooms.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
