const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController.js');

router.post('/', departmentController.createDepartments);
router.get('/', departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartmentById);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;