const mongoose = require('mongoose');

const PembelianSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    supplier: String,
    tanggal_pembelian: Date
})

module.exports = mongoose.model('Pembelian', PembelianSchema, 'pembelian');