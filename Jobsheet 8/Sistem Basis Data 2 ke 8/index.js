const mongoose = require('mongoose');
const express = require('express');

const mongoURI = 'mongodb://127.0.0.1:27017/toko';

mongoose.connect(mongoURI)
.then(() => console.log('Terhubung ke MongoDB YAYYYYYY!!'))
.catch(err => console.error('Gagal terhubung ke MongoDB :( dengan alasan: ', err))

// Skema model
const BarangSchema = new mongoose.Schema({
    nama: String,
    harga_beli: Number,
    harga_jual: Number,
    jenis_barang: String,
    stok: Number,
    deskripsi: String
});

const Barang = mongoose.model('Barang', BarangSchema);

const barangBaru = new Barang({
    nama: 'Indomie sedap', 
    harga_beli: 2500, 
    harga_jual: 3500, 
    jenis_barang: 'makanan pokok',
    stok: 28, 
    deskripsi: 'Makanan Instant'
});

barangBaru.save()
    .then(doc => console.log('Barang tersimpan di: ', doc))
    .catch(err => console.error('Gagal: ', err));