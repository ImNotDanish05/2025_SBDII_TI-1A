const mongoose = require('mongoose');

const BarangSchema = new mongoose.Schema({
    nama: String,
    stok: Number,
    harga_jual: Number,
    harga_beli: Number,
    jenis_barang: String,
    variasi: [{
        rasa: String,
        berat: String
    }],
    deskripsi: String
})

module.exports = mongoose.model('Barang', BarangSchema, 'barang');