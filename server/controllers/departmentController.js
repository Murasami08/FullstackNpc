const Department = require('../models/departmentsModel.js');

const createDepartments = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await Department.create(name);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getAllDepartments = async (req, res) => {
    try {
        const result = await Department.getAll();
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getDepartmentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Department.getId(id);
        if (!result) return res.status(404).send("Department not found");
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const result = await Department.update(id, name);
        if (!result) return res.status(404).send("Department not found");
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const deleteDepartment = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Department.delete(id);
        if (result === 0) return res.status(404).send("Department not found");
        res.json({ message: "Department deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    createDepartments,
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
 };
