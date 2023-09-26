import { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
import EmployeeModal from "./components/EmployeeModal";

const employeeInfos = [
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
];

function App() {
  //const [employees, setEmployees] = useState();

  return (
    <div className=" grid grid-cols-3 gap-2ą">
      {employeeInfos.map((employeeInfo) => {
        return (
          <Employee
            key={employeeInfo.id}
            name={employeeInfo.name}
            role={employeeInfo.role}
            img={employeeInfo.img}
          />
        );
      })}
      <EmployeeModal />
    </div>
  );
}

export default App;
