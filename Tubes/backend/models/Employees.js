// Employees.js
// Employee Model untuk Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({
    employee_id: {
        type: Number,
        required: true,
        min: 0,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    shift: {
        type: Number,
        required: true,
        enum: [1, 2, 3], // shift pagi, siang, malam maybe
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

// Timestamps akan menambahkan `createdAt` dan `updatedAt` otomatis.

const Employees = mongoose.model('Employees', EmployeesSchema, 'Employees');
module.exports = Employees;
