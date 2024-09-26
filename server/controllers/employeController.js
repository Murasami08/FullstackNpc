const Employe = require('../models/employeModel.js');

 const createEmploye = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const result = await Employe.create(name, salary);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getAllEmploye = async (req, res) => {
    try {
        const result = await Employe.getAll();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const getEmployeId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Employe.getById(id);
        if (!result) return res.status(404).send("Employe not found");
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const updateEmploye = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {
        const result = await Employe.update(id, name, salary);
        if (!result) return res.status(404).send("Employe not found");
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};
const deleteEmploye = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Employe.delete(id);
        if (result === 0) return res.status(404).send("employees not found");
        res.json({ message: "employees deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};


module.exports = {
    createEmploye,
    getAllEmploye,
    getEmployeId,
    updateEmploye,
    deleteEmploye,
 };