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

const barangRouter = require('./routes/barang');
app.use('/api/barang', barangRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API is available at http://localhost:${PORT}/api/barang`);
})