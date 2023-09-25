import { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";

const employeeInfos = [
  {
    id: "1",
    name: "Ariana",
    role: "Entertainer",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
  {
    id: "2",
    name: "patrick",
    role: "Developer",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
  {
    id: "3",
    name: "Attila",
    role: "project managment",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
  {
    id: "4",
    name: "whittaker",
    role: "Ux Designer",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
  {
    id: "5",
    name: "Joshua",
    role: "DevOps",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
  {
    id: "6",
    name: "fallon",
    role: "scrum master",
    img: "https://unsplash.com/photos/a-man-with-glasses-sitting-on-a-table-Lgitb85y7-A",
  },
];

function App() {
  //const [employees, setEmployees] = useState();

  return (
    <div className=" grid grid-cols-3 gap-2ą">
      {employeeInfos.map((employeeInfo)=> {
        return (
         
            <Employee
            key={employeeInfo.id}
              name={employeeInfo.name}
              role={employeeInfo.role}
              img={employeeInfo.img}
            />
          
        ) 

      
      })}
    </div>
  );
}

export default App;
