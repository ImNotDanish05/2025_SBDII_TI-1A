// Penjualan.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const penjualanSchema = new Schema({
    nama:{
        type: String,
        required: true,
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    jumlah: {
        type: Number,
        required: true,
        min: 0, // Jumlah tidak boleh negatif
    },
    tanggal_pembelian: {
        type: Date,
        required: true,
        default: Date.now, // Menggunakan tanggal saat ini sebagai default
    }
}, { timestamps: true });

// Timestamps adalah fitur yang secara otomatis menambahkan field `createdAt` dan `updatedAt` pada dokumen.
// Ini berguna untuk melacak kapan dokumen dibuat dan terakhir diperbarui.
// Ini tidak berpengaruh pada struktur data yang disimpan, tetapi memberikan informasi tambahan yang berguna untuk pengelolaan data.

const Penjualan = mongoose.model('Penjualan', penjualanSchema, 'penjualan');
module.exports = Penjualan; // Ekspor model Penjualan untuk digunakan di file lain