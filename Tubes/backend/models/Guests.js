// Guests.js
// Guest Model untuk Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestsSchema = new Schema({
    guest_id: {
        type: Number,
        required: true,
        min: 0,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

// timestamps nambahin createdAt dan updatedAt otomatis.

const Guests = mongoose.model('Guests', GuestsSchema, 'Guests');
module.exports = Guests;
