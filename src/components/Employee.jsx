import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Employee({employee, deleteEmployee}) {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
    
  return (
                    <tr key={employee.id}>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm font-medium text-gray-900'>{employee.firstName}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm font-medium text-gray-900'>{employee.lastName}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm font-medium text-gray-900'>{employee.emailId}</div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap'>
                            <a onClick={(e, id) => editEmployee(e, employee.id)} href='#' className='text-sm font-medium text-blue-500 hover:underline'>Edit</a>
                            <a onClick={(e, id) => deleteEmployee(e, employee.id)} className='text-sm font-medium text-red-500 hover:underline px-4 cursor-pointer'>Delete</a>
                        </td>
                    </tr>
  )
}
