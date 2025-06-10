// barang
// pembelian
// penjualan
// supplier

const mongoose = require('mongoose');
const express = require('express');

const mongoURI = 'mongodb://127.0.0.1:27017/toko';

// mongoose.connect(mongoURI)
// .then(() => console.log('Terhubung ke MongoDB YAYYYYYY!!'))
// .catch(err => console.error('Gagal terhubung ke MongoDB :( dengan alasan: ', err))

// Skema model
// const BarangSchema = new mongoose.Schema({
//     nama: String,
//     harga_beli: Number,
//     harga_jual: Number,
//     jenis_barang: String,
//     stok: Number,
//     deskripsi: String
// });

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
const PembelianSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    supplier: String,
    tanggal_pembelian: Date
})
const PenjualanSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    tanggal_pembelian: Date 
})
const SupplierSchema = new mongoose.Schema({
    nama: String,
    jumlah: Number,
    tanggal_pembelian: Date
})

// Koneksi
// Template: mongoose.model('ModelName', SchemaName, 'NamaCollectionAsli')
// arg 1 = Nama model
// arg 2 = yaa schema :V
// arg 3 = Collections yang sudah di database
const Barang = mongoose.model('Barang', BarangSchema, 'barang');
const Pembelian = mongoose.model('Pembelian', PembelianSchema, 'pembelian');
const Penjualan = mongoose.model('Penjualan', PenjualanSchema, 'penjualan');
const Supplier = mongoose.model('Supplier', SupplierSchema, 'supplier')

// Data
const barangBaru = new Barang({
    nama: 'Indomie Goreng', 
    harga_beli: 3000, 
    harga_jual: 4000,
    jenis_barang: 'makanan pokok',
    stok: 50, 
    deskripsi: 'Makanan Instant',
    variasi: [
        { rasa: 'Original', berat: '70g' },
        { rasa: 'Pedas', berat: '70g' }
    ]
});

const pembelianBaru = new Pembelian({
    nama: 'Indomie Goreng', 
    jumlah: 100, 
    supplier: 'PT Mie Sejahtera',
    tanggal_pembelian: new Date('2025-06-01')
});

const penjualanBaru = new Penjualan({
    nama: 'Indomie Goreng',
    jumlah: 20,
    tanggal_pembelian: new Date('2025-06-02')  // Hmm, ini kayaknya typo, harusnya tanggal penjualan ya? Kalau mau, aku bisa bantu perbaiki~
});

const supplierBaru = new Supplier({
    nama: 'PT Mie Sejahtera',
    jumlah: 1000,  // Mungkin ini stok supplier atau total barang yang mereka jual?
    tanggal_pembelian: new Date('2025-05-30')
});

// function simpanBarang(namaVariabel, barangObjek) {
//     barangObjek.save()
//         .then(doc => console.log(`${namaVariabel} tersimpan di:`, doc))
//         .catch(err => console.error('Gagal:', err));
// }

async function simpanBarang(namaVariabel, barangObjek) {
    try {
        const doc = await barangObjek.save();
        console.log(`${namaVariabel} tersimpan di:`, doc);
    } catch (err) {
        console.error(`Gagal simpan ${namaVariabel}:`, err);
    }
}

async function main() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Terhubung ke MongoDB YAYYYYYY!!');

        await simpanBarang('barangBaru', barangBaru);
        await simpanBarang('pembelianBaru', pembelianBaru);
        await simpanBarang('penjualanBaru', penjualanBaru);
        await simpanBarang('supplierBaru', supplierBaru);

        mongoose.disconnect();
    } catch (err) {
        console.error('Gagal terhubung ke MongoDB :(', err);
    }
}

// Panggil fungsi simpan dengan nama variabel sebagai string
main();