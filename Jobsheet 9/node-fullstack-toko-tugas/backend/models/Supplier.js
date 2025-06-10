// File ini mendefinisikan model Mongoose untuk koleksi 'supplier'.
// Supplier.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    nama: {
        type: String,
        required: true,
        trim: true
    },
    nama_supplier: {
        type: String,
        required: true,
        trim: true
    },
    alamat: {
        type: String,
        required: false,
        trim: true
    },
    kode_pos: {
        type: String,
        required: false,
        trim: true
    },
    tanggal_pembelian: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });


// Timestamps adalah fitur yang secara otomatis menambahkan field `createdAt` dan `updatedAt` pada dokumen.
// Ini berguna untuk melacak kapan dokumen dibuat dan terakhir diperbarui.
// Ini tidak berpengaruh pada struktur data yang disimpan, tetapi memberikan informasi tambahan yang berguna untuk pengelolaan data.

const Supplier = mongoose.model('Supplier', supplierSchema, 'supplier');
module.exports = Supplier;// Ekspor model Supplier untuk digunakan di file lain
// File ini mendefinisikan model Mongoose untuk koleksi 'supplier'.