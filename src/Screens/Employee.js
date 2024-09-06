import React, { useState, useEffect } from 'react';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data. In a real app, replace this with an API call.
    const fetchData = async () => {
      // Mock data
      const mockData = [
        { id: 1, name: 'MOHAMED (SHAN) MUKHTHAR', position: 'MANAGER' },
        { id: 2, name: 'DHIVAKAR BALASUBRAMANIYAM', position: 'US IT RECRUITER' },
        { id: 3, name: 'M.SUPREETH', position: 'Junior Developer' }
       
      ];
      setEmployees(mockData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Employee Details</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;