const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://danish05:NOFqNGdoaqpv611Z@sbdiitubes.64wndhe.mongodb.net/DBSystemHotels';


// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const guestRouter = require('./routes/Guests');
app.use('/api/guests', guestRouter);

const roomRouter = require('./routes/Rooms');
app.use('/api/rooms', roomRouter);

const bookingRouter = require('./routes/Bookings');
app.use('/api/bookings', bookingRouter);

const paymentRoomRouter = require('./routes/PaymentRooms');
app.use('/api/paymentrooms', paymentRoomRouter);

const paymentMethodRouter = require('./routes/PaymentMethods');
app.use('/api/paymentmethods', paymentMethodRouter);

const employeeRouter = require('./routes/Employees');
app.use('/api/employees', employeeRouter);

// Server listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`→ http://localhost:${PORT}/api/Guests`);
  console.log(`→ http://localhost:${PORT}/api/Rooms`);
  console.log(`→ http://localhost:${PORT}/api/Bookings`);
  console.log(`→ http://localhost:${PORT}/api/Paymentrooms`);
  console.log(`→ http://localhost:${PORT}/api/Paymentmethods`);
  console.log(`→ http://localhost:${PORT}/api/Employees`);
  console.log(`MongoDB URI: ${MONGO_URI}`);
});
