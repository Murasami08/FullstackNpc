require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const employeRoute = require('./routes/employeRoute.js');
const departmentRoute = require('./routes/departmentRoute.js');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/employees', employeRoute);

app.use('/departments', departmentRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
