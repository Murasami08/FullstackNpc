const pool = require('../db.js');
const Department = {
    create: async (name) => {
        const newDepartment = await pool.query(
            'INSERT INTO departments (department_name) VALUES ($1) RETURNING *',
            [name]
        );
        return newDepartment.rows[0];
    },
    getAll: async () => {
        const getAllDepartment = await pool.query('SELECT * FROM departments');
        return getAllDepartment.rows;
    },
    getId: async (id) => {
        const getDepartmentId = await pool.query('SELECT * FROM departments WHERE department_id = $1', [id]);
        return getDepartmentId.rows[0];
    },
    update: async (id, name) => {
        const updatedDepartment = await pool.query(
            'UPDATE departments SET department_name = $1 WHERE department_id = $2 RETURNING *',
            [name, id]
        );
        return updatedDepartment.rows[0];
    },
    delete: async (id) => {
        const deleteDepartment = await pool.query('DELETE FROM departments WHERE department_id = $1', [id]);
        return deleteDepartment.rowCount;
    }
 };
  module.exports = Department;
