// Pembelian.js
// Model Mongoose untuk koleksi Pembelian
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pembelianSchema = new Schema({
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
    supplier: {
        type: String,
        required: true,
        trim: true, // Menghapus spasi di awal dan akhir string
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

const Pembelian = mongoose.model('Pembelian', pembelianSchema, 'pembelian');
module.exports = Pembelian; // Ekspor model Pembelian untuk digunakan di file lain
// Pastikan untuk mengimpor dan menggunakan model ini di file lain sesuai kebutuhan, misalnya dalam route handler untuk menangani operasi CRUD pada koleksi Pembelian.