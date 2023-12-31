import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EmployeeEdit(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateEmployee() {
    console.log('showing updated values of emplye and role')

  };

const AddEmployee = () => {
  return (
    <>
    <button
      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      onClick={handleShow}
    >
      Add new Employee
    </button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" className="w-full max-w-sm "
         onSubmit={(e) =>{
          handleClose()
          e.preventDefault();
          //console.log('hi from edit employee');
          //console.log(props.id,name,role)
          props.updateEmployee(props.id,name,role)
        }}>
          <div className="flex flex-wrap justify-center p-3 ">
            <div className="mb-4 flex flex-col gap-4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={name}
                onChange={(e) =>{
                  setName(e.target.value)
                }}
              />

              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={role}
                onChange={(e) =>{
                  setRole(e.target.value)
                }}
              />
            </div>

            <div className="md:w-2/3 mt-2 flex justify-center">
              <button
                className="  shadow bg-purple-400 hover:bg-purple-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-auto "
                type="button"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">ADD</Button>
      </Modal.Footer>
    </Modal>
  </>
);
}
  
}

export default AddEmployee