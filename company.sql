
CREATE DATABASE company_db;

-- Подключение к базе данных
\c company_db;

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    budget NUMERIC(10, 2) NOT NULL,
    established_date DATE NOT NULL
);


CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    salary NUMERIC(10, 2) NOT NULL,
    hire_date DATE NOT NULL,
    department_id INTEGER REFERENCES departments(department_id)
);


INSERT INTO departments (department_name, budget, established_date) VALUES
('Human Resources', 50000.00, '2010-01-15'),
('IT', 150000.00, '2012-03-20'),
('Marketing', 75000.00, '2015-06-30');


INSERT INTO employees (employee_name, salary, hire_date, department_id) VALUES
('Alice Smith', 60000.00, '2020-05-01', 1),
('Bob Johnson', 80000.00, '2019-07-15', 2),
('Charlie Brown', 55000.00, '2021-09-10', 1),
('Diana Prince', 90000.00, '2018-12-20', 2),
('Ethan Hunt', 70000.00, '2022-02-25', 3);

-- SELECT * FROM departments;
-- SELECT * FROM employees;
