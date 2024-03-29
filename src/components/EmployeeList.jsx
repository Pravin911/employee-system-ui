import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

export default function EmployeeList() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log('Error getting employees', error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res) => {
            if(employees) {
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                })
            }
        })
    }

    return (
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button 
                    onClick={() => navigate("/addEmployee")}
                    className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'
                >
                    Add Employee
                </button>
            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>First Name</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Last Name</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email Id</th>
                            <th className='px-12 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>
                    
                    {!loading && 
                        <tbody>
                            {employees.map((employee) => (
                                <Employee 
                                    employee={employee}
                                    deleteEmployee={deleteEmployee}
                                    key={employee.id}
                                />
                            ))}
                        </tbody>
                    }
                </table>
            </div>
        </div>
    );
}
