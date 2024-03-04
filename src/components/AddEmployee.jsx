import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

export default function AddEmployee() {

  const [Employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...Employee,
      [e.target.name]: value
    });
  }

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(Employee).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-lg'>
      <div className='p-8 mt-5'>
        <h2 className='text-3xl font-semibold mb-4'>Add New Employee</h2>

        <div className='mb-4'>
          <label htmlFor='firstName' className='block text-gray-600 text-sm font-semibold mb-1'>First Name</label>
          <input onChange={(e) => handleChange(e)} name='firstName' value={Employee.firstName} type='text' className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400' />
        </div>

        <div className='mb-4'>
          <label htmlFor='lastName' className='block text-gray-600 text-sm font-semibold mb-1'>Last Name</label>
          <input onChange={(e) => handleChange(e)} name='lastName' value={Employee.lastName} type='text' className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400' />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-600 text-sm font-semibold mb-1'>Email</label>
          <input onChange={(e) => handleChange(e)} name='emailId' value={Employee.emailId} type='email' className='w-full h-10 px-4 border-2 rounded-md focus:outline-none focus:border-blue-400' />
        </div>

        <div className='flex justify-between'>
          <button onClick={saveEmployee} type='submit' className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none'>
            Save
          </button>
          <button type='reset' className='bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none'>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
