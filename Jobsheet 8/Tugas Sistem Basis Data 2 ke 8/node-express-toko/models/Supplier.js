const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    tanggal_pembelian: Date
})

module.exports = mongoose.model('Supplier', SupplierSchema, 'supplier')