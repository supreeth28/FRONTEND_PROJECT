import React from 'react';

function EmployeeDetailsPage() {
  return (
    <div className="EmployeeDetailsPage">
     <div className="container">
        <h1>EMPLOYEE DETAILS</h1>
        <p>The details of the employees are displayed below:-</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>EMP ID</th>
            <th>DEPT ID</th>
            <th>EMPNAME</th>
            <th> SALARY</th>
            <th> DESIGNATION </th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
                    A1
                </td>
                <td> A21 </td>
                <td>Dhivakar Balasubramaniyam</td>
                <td> 33000</td>
                <td> US IT Recruiter</td>
          </tr>
          <tr>
          <td>
                    A2
                </td>
                <td> A22 </td>
                <td>N.KUMAR</td>
                <td> 190000</td>
                <td> DIRECTOR OF IT</td>
          </tr>

          <tr>
                <td>
                    A3
                </td>
                <td> A23 </td>
                <td>M.SUPREETH</td>
                <td> 15000</td>
                <td> JUNIOR DEVELOPER</td>


            </tr>

            <tr>
                <td>
                    A4
                </td>
                <td> A24 </td>
                <td>Mohamed (SHAN) Mukthar </td>
                <td> 83000</td>
                <td> MANAGER</td>


            </tr>

            <tr>
                <td>
                    A5
                </td>
                <td> A25 </td>
                <td>Koushik Raman Subramanian</td>
                <td> 93000</td>
                <td> Senior Delivery Manager</td>


            </tr>

            <tr>
                <td>
                    A6
                </td>
                <td> A26 </td>
                <td> Joe Logu</td>
                <td> 53000</td>
                <td> Software Professional</td>


            </tr>

            <tr>
                <td>
                    A7
                </td>
                <td> A27 </td>
                <td>Arun Kumar Xavier Joseph Lourdu Doss</td>
                <td> 99000</td>
                <td> Java Lead Developer</td>


            </tr>

            <tr>
                <td>
                    A8
                </td>
                <td> A28 </td>
                <td>Mohammed Ashif(Haas)</td>
                <td> 89000</td>
                <td> Sr Technical Recruiter / Bench sales Recruiter at NJTech Inc</td>


            </tr>

            <tr>
                <td>
                    A9
                </td>
                <td> A29 </td>
                <td>Saurabh S</td>
                <td> 60000</td>
                <td> QA & TESTING PROFESSIONA</td>


            </tr>

            










        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetailsPage;