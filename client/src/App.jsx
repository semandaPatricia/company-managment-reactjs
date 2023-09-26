
import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import Employee from "./components/Employee"; // Import the Employee component here



function App() {

  const [role,setRole] = useState()
  const [employeeInfos,setEmployeeInfos] = useState( [
    {
      id: "1",
      name: "Ariana",
      role: "Entertainer",
      img: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "2",
      name: "patrick",
      role: "Developer",
      img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "3",
      name: "Attila",
      role: "project managment",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "4",
      name: "lizzie",
      role: "Ux Designer",
      img: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "5",
      name: "Jo Hyn",
      role: "DevOps",
      img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "6",
      name: "fallon",
      role: "scrum master",
      img: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);
  
  function updateEmployee(id,newName,newRole) {
   // console.log('updateemployee inside app.js')
   const updatedEmployees = employeeInfos.map((employeeInfo) =>{
    if (id == employeeInfo.id){
      return {...employeeInfo, name:newName, role :newRole}
      
    }
    return employeeInfo;
   });
   setEmployeeInfos(updatedEmployees)
  };
  
  
  
  
  
  const showEmployees= true;
    return (
      <div className=" grid grid-cols-3 gap-2ą">
        {showEmployees ? (
          <>
          <input type="text" onChange={(e) => {
            //console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <div className=" flex">
          {employeeInfos.map((employeeInfo) => {
            return (
              
              <Employee
                key={employeeInfo.id}
                id={employeeInfo.id}
                name={employeeInfo.name}
                role={employeeInfo.role}
                img={employeeInfo.img}
                updateEmployee={updateEmployee}
              />
            );
          })}
          </div>
          </>
        ) :(
  <p>Employees are not currently shown.</p>
  )}
      </div>
      
    );
    }
        
   
  
  export default App;