import { useEffect, useState } from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import { successToast, errorToast, modifyToast } from "./toast";
import CustomModal from "./Modal";
import SearchEmployee from "./searchEmployee";
// import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";

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

  const handleClose = () => {
    setShowModal(false);
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
  };
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
    console.log("valChange");
  };

  const isInputFormEmpty = (inputForm) => {
    for (let prop in inputForm) {
      if (inputForm[prop] === "") {
        return true;
      }
    }
    return false;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const hasToCreateEmployee = !employee.id;
    const verifyInputFormEmpty = isInputFormEmpty(employee);

    if (hasToCreateEmployee) {
      if (!verifyInputFormEmpty) {
        setEmployees([
          ...employees,
          {
            id: crypto.randomUUID().split("-")[0].substring(0, 4),
            ...employee,
          },
        ]);

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
      } else {
        errorToast({
          message: "Please complete all the inputs !",
          autoClose: 3000,
        });
      }
    } else {
      const updatedEmployees = employees.map((employeeAlreadyInList) => {
        if (employeeAlreadyInList.id === employee.id) {
          return employee;
        }
        return employeeAlreadyInList;
      });
      if (!verifyInputFormEmpty) {
        const idOfEmployee = employee.id;
        setEmployees(updatedEmployees);
        handleClose();
        modifyToast({
          message: `The employee with ID:${idOfEmployee} has been modified!`,
          autoClose: 3000,
        });
      } else {
        errorToast({
          message: "Please complete all the inputs !",
          autoClose: 3000,
        });
      }
    }
  };

  const deleteEmployee = () => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeToDelete.id
    );
    setEmployees(updatedEmployees);
    setEmployeeToDelete(null);
    handleClose();
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-between mt-5 mb-5 ">
        <Button
          className="w-25 fw-semibold add_btn"
          variant="success"
          onClick={() => handleShow("new")}
        >
          New Employee
        </Button>

        <SearchEmployee
          clearSearchResult={clearSearchResult}
          employees={employees}
          setSearchResult={setSearchResult}
        />
      </div>

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
              <th className="bg-dark text-light" scope="col">
                Actions
              </th>
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
                    <tr className="centered p-0" key={index++}>
                      <td>{id}</td>
                      <td>{fullname}</td>
                      <td>{profession}</td>
                      <td>{gender}</td>
                      <td>{nationality}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td className="p-0 m-0">
                        <Button
                          className="bg-info w-50 rounded-0"
                          variant="info"
                          onClick={() => {
                            setEmployee(data);
                            handleShow("modify");
                          }}
                        >
                          <RiEdit2Fill />
                        </Button>
                        <Button
                          className="bg-danger w-50 rounded-0 "
                          variant="danger"
                          onClick={() => {
                            handleShow("remove");
                            setEmployeeToDelete(data);
                          }}
                        >
                          <RiDeleteBinFill className="text-dark" />
                        </Button>
                      </td>
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
                    <tr className="centered p-0" key={index++}>
                      <td>{id}</td>
                      <td>{fullname}</td>
                      <td>{profession}</td>
                      <td>{gender}</td>
                      <td>{nationality}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td className="p-0 m-0">
                        <Button
                          className="bg-info w-50 rounded-0"
                          variant="info"
                          onClick={() => {
                            setEmployee(data);
                            handleShow("modify");
                          }}
                        >
                          <RiEdit2Fill />
                        </Button>
                        <Button
                          className="bg-danger w-50 rounded-0 "
                          variant="danger"
                          onClick={() => {
                            handleShow("remove");
                            setEmployeeToDelete(data);
                          }}
                        >
                          <RiDeleteBinFill className="text-dark" />
                        </Button>
                      </td>
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
