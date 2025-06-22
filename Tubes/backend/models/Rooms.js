// Rooms.js
// Room Model untuk Hotel Management System

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    room_id: {
        type: Number,
        required: true,
        min: 0
    },
    room_type: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    availability: {
        type: Number,
        required: true,
        min: 0
    },
    bed_count: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Rooms = mongoose.model('Rooms', RoomSchema, 'Rooms');
module.exports = Rooms;
