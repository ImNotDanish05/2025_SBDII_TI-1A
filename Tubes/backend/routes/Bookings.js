const express = require('express');
const router = express.Router();
const Bookings = require('../models/Bookings');

// CREATE - Tambah Booking Baru
router.post('/', async (req, res) => {
    try {
        const {
            booking_id,
            guest_id,
            room_id,
            employee_id,
            check_in_date,
            check_out_date,
            booking_status
        } = req.body;

        const newBooking = new Bookings({
            booking_id,
            guest_id,
            room_id,
            employee_id,
            check_in_date,
            check_out_date,
            booking_status
        });

        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil Semua Booking
router.get('/', async (req, res) => {
    try {
        console.log("GET /api/bookings accessed");
        const bookings = await Bookings.find();
        console.log(bookings);
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Update Booking Berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const updatedBooking = await Bookings.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    booking_id: req.body.booking_id,
                    guest_id: req.body.guest_id,
                    room_id: req.body.room_id,
                    employee_id: req.body.employee_id,
                    check_in_date: req.body.check_in_date,
                    check_out_date: req.body.check_out_date,
                    booking_status: req.body.booking_status
                }
            },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus Booking Berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedBooking = await Bookings.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
