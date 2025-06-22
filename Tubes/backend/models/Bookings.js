// Bookings.js
// Booking Model for Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
    booking_id: {
        type: Number,
        required: true,
        min: 0,
    },
    guest_id: {
        type: Number,
        required: true,
        min: 0,
    },
    room_id: {
        type: Number,
        required: true,
        min: 0,
    },
    employee_id: {
        type: Number,
        required: true,
        min: 0,
    },
    check_in_date: {
        type: Date,
        required: true,
    },
    check_out_date: {
        type: Date,
        required: true,
    },
    booking_status: {
        type: Number,
        required: true,
        min: 0,
    },
}, { timestamps: true });

// Timestamps adalah fitur yang secara otomatis menambahkan field `createdAt` dan `updatedAt` pada dokumen.
// Ini berguna untuk melacak kapan dokumen dibuat dan terakhir diperbarui.
// Ini tidak berpengaruh pada struktur data yang disimpan, tetapi memberikan informasi tambahan yang berguna untuk pengelolaan data.

const Bookings = mongoose.model('Bookings', BookingsSchema,'Bookings');
module.exports = Bookings;