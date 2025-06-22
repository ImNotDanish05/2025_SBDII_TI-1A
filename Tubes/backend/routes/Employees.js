const express = require('express');
const router = express.Router();
const Employees = require('../models/Employees');

// CREATE - Tambah Employee baru
router.post('/', async (req, res) => {
    try {
        const {
            employee_id,
            name,
            position,
            shift,
            email,
            phone_number,
            address
        } = req.body;

        const newEmployee = new Employees({
            employee_id,
            name,
            position,
            shift,
            email,
            phone_number,
            address
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ - Ambil semua data karyawan
router.get('/', async (req, res) => {
    try {
        const employees = await Employees.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE - Perbarui data berdasarkan ID MongoDB
router.put('/:id', async (req, res) => {
    try {
        const {
            employee_id,
            name,
            position,
            shift,
            email,
            phone_number,
            address
        } = req.body;

        const updatedEmployee = await Employees.findByIdAndUpdate(
            req.params.id,
            {
                employee_id,
                name,
                position,
                shift,
                email,
                phone_number,
                address
            },
            { new: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE - Hapus data berdasarkan ID MongoDB
router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employees.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
