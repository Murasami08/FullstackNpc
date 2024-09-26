
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Employe = () => {
    const [rowData, setRowData] = useState([]);
 
    const [columnDefs] = useState([
        { headerName: "ID", field: "employee_id" },
        { headerName: "Name", field: "employee_name" },
        { headerName: "Salary", field: "salary" },
        {
            headerName: "Actions",
            cellRendererFramework: (params) => (
                <div>
                    <button onClick={() => handleEdit(params.data)}>Изменить</button>
                    <button onClick={() => handleDelete(params.data.id)}>Удалить</button>
                </div>
            ),
        },
    ]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/employees');
            setRowData(response.data);
        }catch(err){
            console.error(err);
        }
    };

    const handleAdd = async () => {
        const newEmploye = { name: 'Vladimir', salary: '500000' }; 
        await axios.post('http://localhost:8080/employees', newEmploye);
        fetchData();
    };

    const handleEdit = async (data) => {
        const updatedEmploye = { ...data, name: 'John' }; 
        await axios.put(`http://localhost:8080/employees/${data.id}`, updatedEmploye);
        fetchData();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/employees/${id}`);
        fetchData();
    };

    
    return (
        <div>
<button onClick={handleAdd}>Добавить запись</button>
            <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                />
            </div>
        </div>
        
    );
};

export default Employe;
