// PaymentMethods.js
// Payment Method Model untuk Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentMethodSchema = new Schema({
    payment_method_id: {
        type: Number,
        required: true,
        min: 0
    },
    method_name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, { timestamps: true });

// timestamps akan menambahkan createdAt dan updatedAt otomatis

const PaymentMethods = mongoose.model('PaymentMethods', PaymentMethodSchema, 'PaymentMethods');
module.exports = PaymentMethods;
