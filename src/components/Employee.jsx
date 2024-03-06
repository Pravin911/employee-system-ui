import React from 'react'

export default function Employee({employee, deleteEmployee}) {
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
                            <a href='#' className='text-sm font-medium text-blue-500 hover:underline'>Edit</a>
                            <a onClick={(e, id) => deleteEmployee(e, employee.id)} className='text-sm font-medium text-red-500 hover:underline px-4 cursor-pointer'>Delete</a>
                        </td>
                    </tr>
  )
}
