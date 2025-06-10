const express = require('express');
const mongoose = require('mongoose');
const Barang = require('./models/Barang');
const barangs = require('./routers/barangs');

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

// Jalankan server
app.listen(PORT, () => {
    console.log('🚀 Running in http://localhost:', PORT)
})