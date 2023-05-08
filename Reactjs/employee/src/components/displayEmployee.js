import { useEffect, useState } from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import { successToast } from "./toast";
import CustomModal from "./Modal";

const DisplayEmployee = () => {
  const getSavedTable = () => {
    const savedTable = JSON.parse(localStorage.getItem("saved_table"));
    return savedTable ? savedTable : [];
  };

  const [employees, setEmployees] = useState(getSavedTable());
  const [showModal, setShowModal] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const handleClose = () => setShowModal(false);

  const handleShow = (type) => {
    setShowModal(true);
    setModalType(type);
  };
  const clearSearchResult = () => setSearchResult([]);

  const [employee, setEmployee] = useState({
    fullname: "",
    profession: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const saveLocalStorage = () => {
    localStorage.setItem("saved_table", JSON.stringify(employees));
  };

  useEffect(() => {
    saveLocalStorage();
  }, [employees]);

  const onValChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const hasToCreateEmployee = !employee.id;
    if (hasToCreateEmployee) {
      setEmployees([
        ...employees,
        { id: crypto.randomUUID().split("-")[0].substring(0, 4), ...employee },
      ]);
    } else {
      const updatedEmployees = employees.map((employeeAlreadyInList) => {
        if (employeeAlreadyInList.id === employee.id) {
          return employee;
        }
        return employeeAlreadyInList;
      });
      setEmployees(updatedEmployees);
    }

    setEmployee({
      fullname: "",
      profession: "",
      gender: "",
      nationality: "",
      address: "",
      city: "",
      phone: "",
      email: "",
    });
    handleClose();
    successToast({ message: "New employer added !", autoClose: 3000 });
    //   setEmployees(employees.sort((a, b) => a.id - b.id))
    // errorToast({ message: "Please complete all the inputs !" });
  };

  const deleteEmployee = () => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeToDelete.id
    );
    setEmployees(updatedEmployees);
    setEmployeeToDelete(null);
    handleClose();
  };

  //   console.log(employees[0].id);

  return (
    <div>
      <Header />
      <Button variant="success" onClick={() => handleShow("new")}>
        New Employee
      </Button>
      <Button variant="success" onClick={() => handleShow("search")}>
        Search Employee
      </Button>
      <Button variant="warning" onClick={clearSearchResult}>
        Actualize Table
      </Button>
      <CustomModal
        showModal={showModal}
        handleClose={handleClose}
        type={modalType}
        onFormSubmit={onFormSubmit}
        employee={employee}
        onValChange={onValChange}
        deleteEmployee={deleteEmployee}
        employees={employees}
        setSearchResult={setSearchResult}
      />

      <div className="employee-list">
        <table className="table table-dark table-hover ">
          <thead className="table-light">
            <tr className="centered">
              <th scope="col">ID</th>
              <th scope="col">Fullname</th>
              <th scope="col">Profession</th>
              <th scope="col">Gender</th>
              <th scope="col">Nationality</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {console.log(searchResult)}
          <tbody className="result">
            {searchResult.length > 0
              ? searchResult.map((data, index) => {
                  const {
                    id,
                    fullname,
                    profession,
                    gender,
                    nationality,
                    address,
                    city,
                    phone,
                    email,
                  } = data;
                  return (
                    <tr className="centered" key={index++}>
                      <td>{id}</td>
                      <td>{fullname}</td>
                      <td>{profession}</td>
                      <td>{gender}</td>
                      <td>{nationality}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                    </tr>
                  );
                })
              : employees.map((data, index) => {
                  const {
                    id,
                    fullname,
                    profession,
                    gender,
                    nationality,
                    address,
                    city,
                    phone,
                    email,
                  } = data;
                  return (
                    <tr
                      //   onClick={()=>handleEvent(index)}
                      className="centered"
                      key={index++}
                    >
                      <td>{id}</td>
                      <td>{fullname}</td>
                      <td>{profession}</td>
                      <td>{gender}</td>
                      <td>{nationality}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <Button
                        className="bg-warning"
                        variant="warning"
                        onClick={() => {
                          setEmployee(data);
                          handleShow("modify");
                        }}
                      >
                        Modify Employee
                      </Button>

                      <Button
                        className="remove-btn text-dark"
                        variant="danger"
                        onClick={() => {
                          handleShow("remove");
                          setEmployeeToDelete(data);
                        }}
                      >
                        Remove Employee
                      </Button>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayEmployee;
