const express = require('express');
const mongoose = require('mongoose');
// Barang, Pembelian, Penjualan, Supplier
const Barang = require('./models/Barang');
const barang = require('./routers/barang');
const Pembelian = require('./models/Pembelian');
const pembelian = require('./routers/pembelian');
const Penjualan = require('./models/Penjualan');
const penjualan = require('./routers/penjualan');
const Supplier = require('./models/Supplier');
const supplier = require('./routers/supplier');

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/toko';

app.use(express.json());
mongoose.connect(MONGODB_URI)
.then(() => console.log('Terhubung ke Mongo :D'))
.catch(err => console.log('ERROR NOOO!! ', err));

// Router dasar
app.get('/', (req, res) => {
    res.send('API barang aktif')
});


// Barang, Pembelian, Penjualan, Supplier
// Ambil semua barang
app.get('/barang', async (req, res) => {
    const data = await Barang.find();
    res.json(data);
});

// Tambah barang baru
app.post('/barang', async (req, res) => {
    try {
        const barang = new Barang(req.body);
        const saved = await barang.save();
        res.status(201).json(saved);
    }
    catch (err){
        res.status(400).json({error: err.message})
    }
});

// Ambil semua pembelian
app.get('/pembelian', async (req, res) => {
    const data = await Pembelian.find();
    res.json(data);
});
// Tambah pembelian baru
app.post('/pembelian', async (req, res) => {
    try {
        const pembelian = new Pembelian(req.body);
        const saved = await pembelian.save();
        res.status(201).json(saved);
    }
    catch (err){
        res.status(400).json({error: err.message})
    }
});

// Ambil semua penjualan
app.get('/penjualan', async (req, res) => {
    const data = await Penjualan.find();
    res.json(data);
});
// Tambah penjualan baru
app.post('/penjualan', async (req, res) => {
    try {
        const penjualan = new Penjualan(req.body);
        const saved = await penjualan.save();
        res.status(201).json(saved);
    }
    catch (err){
        res.status(400).json({error: err.message})
    }
});

// Ambil semua supplier
app.get('/supplier', async (req, res) => {
    const data = await Supplier.find();
    res.json(data);
});
// Tambah supplier baru
app.post('/supplier', async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        const saved = await supplier.save();
        res.status(201).json(saved);
    }
    catch (err){
        res.status(400).json({error: err.message})
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log('🚀 Running in http://localhost:', PORT)
})