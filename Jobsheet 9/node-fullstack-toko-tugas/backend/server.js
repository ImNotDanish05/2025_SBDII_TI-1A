const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/toko';
// Middleware
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// barang, pembelian, penjualan, and supplier routes

// barang routes
const barangRouter = require('./routes/barang');
app.use('/api/barang', barangRouter);

// pembelian routes
const pembelianRouter = require('./routes/pembelian');
app.use('/api/pembelian', pembelianRouter);

// penjualan routes
const penjualanRouter = require('./routes/penjualan');
app.use('/api/penjualan', penjualanRouter);

// supplier routes
const supplierRouter = require('./routes/supplier');
app.use('/api/supplier', supplierRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API is available at http://localhost:${PORT}/api/barang`);
  console.log(`API is available at http://localhost:${PORT}/api/pembelian`);
  console.log(`API is available at http://localhost:${PORT}/api/penjualan`);
  console.log(`API is available at http://localhost:${PORT}/api/supplier`);
  console.log(`MongoDB URI: ${MONGO_URI}`);
})