const mongoose = require('mongoose');

const PenjualanSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    tanggal_pembelian: Date 
})

module.exports = mongoose.model('Penjualan', PenjualanSchema, 'penjualan');