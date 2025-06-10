const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barangSchema = new Schema({
    nama: {
        type: String,
        required: true,
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    harga_beli: {
        type: Number,
        required: true,
        min: 0, // Harga tidak boleh negatif
    },
    harga_jual: {
        type: Number,
        required: true,
        min: 0, // Harga tidak boleh negatif
    },
    jenis_barang: {
        type: String,
        required: true,
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    stok: {
        type: Number,
        required: true,
        min: 0, // Stok tidak boleh negatif
    },
    deskripsi: {
        type: String,
        trim: true, // Menghapus spasi di awal dan akhir string
    }
}, { timestamps: true });

// Timestamps adalah fitur yang secara otomatis menambahkan field `createdAt` dan `updatedAt` pada dokumen.
// Ini berguna untuk melacak kapan dokumen dibuat dan terakhir diperbarui.
// Ini tidak berpengaruh pada struktur data yang disimpan, tetapi memberikan informasi tambahan yang berguna untuk pengelolaan data.

const Barang = mongoose.model('Barang', barangSchema); // 'barang' adalah nama koleksi di MongoDB
module.exports = Barang; // Ekspor model Barang untuk digunakan di file lain