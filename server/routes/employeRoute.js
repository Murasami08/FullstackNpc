const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeController.js');

router.post('/', employeeController.createEmploye);
router.get('/', employeeController.getAllEmploye);
router.get('/:id', employeeController.getEmployeId);
router.put('/:id', employeeController.updateEmploye);
router.delete('/:id', employeeController.deleteEmploye);

module.exports = router;