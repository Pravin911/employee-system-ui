import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({
            ...employee,
            [e.target.name]: value
        });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                navigate('/employeeList');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            } catch (error) {
                console.log('Error getting employees', error);
            }
        };
        fetchData(); // Call fetchData here to ensure it's executed on component mount
    }, [id]); // Add id as dependency to trigger useEffect when it changes

    return (
        <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-lg'>
            <div className='p-8 mt-5'>
                <h2 className='text-3xl font-semibold mb-4'>Update Employee</h2>

                <div className='mb-4'>
                    <label htmlFor='firstName' className='block text-gray-600 text-sm font-semibold mb-1'>
                        First Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name='firstName'
                        value={employee.firstName}
                        type='text'
                        className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400'
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='lastName' className='block text-gray-600 text-sm font-semibold mb-1'>
                        Last Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name='lastName'
                        value={employee.lastName}
                        type='text'
                        className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400'
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-600 text-sm font-semibold mb-1'>
                        Email
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name='emailId'
                        value={employee.emailId}
                        type='email'
                        className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400'
                    />
                </div>

                <div className='flex justify-between'>
                    <button
                        onClick={updateEmployee}
                        type='submit'
                        className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none'>
                        Update
                    </button>
                    <button
                        onClick={() => navigate('/employeeList')}
                        className='bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;
