const pool = require('../db.js');
const Employees = {
    create: async (name, salary) => {
        const newEmploye = await pool.query(
            'INSERT INTO employees (employee_name, salary) VALUES ($1, $2) RETURNING *',
            [name, salary]
        );
        return newEmploye.rows[0];
    },
    getAll: async () => {
        const getAllEmploye = await pool.query('SELECT * FROM employees');
        return getAllEmploye.rows;
    },
    getById: async (id) => {
        const getEmployeId = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [id]);
        return getEmployeId.rows[0];
    },
    update: async (id, name, salary) => {
        const updatedEmployee = await pool.query(
            'UPDATE employees SET employee_name=$1, salary=$2 WHERE employee_id=$3 RETURNING *',
            [name, salary, id]
        );
        return updatedEmployee.rows[0];
    },
    delete: async (id) => {
        const deleteEmploye =  await pool.query('DELETE FROM employees WHERE employee_id=$1', [id]);
        return deleteEmploye.rowCount;
    }
};

module.exports = Employees;