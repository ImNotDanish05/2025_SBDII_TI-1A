// PaymentRooms.js
// Payment Room Model untuk Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentRoomSchema = new Schema({
    payment_id: {
        type: Number,
        required: true,
        min: 0
    },
    booking_id: {
        type: Number,
        required: true,
        min: 0
    },
    payment_method_id: {
        type: Number,
        required: true,
        min: 0
    },
    amount_paid: {
        type: Number,
        required: true,
        min: 0
    },
    payment_date: {
        type: Date,
        required: true
    },
    payment_status: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const PaymentRooms = mongoose.model('PaymentRooms', PaymentRoomSchema, 'PaymentRooms');
module.exports = PaymentRooms;
