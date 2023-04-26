import { useState } from "react";
import AddEmployee from "./addEmployee";
import Header from "./header";


const DisplayEmployee = ({ tableData, setTableData, toast }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formObject, setFormObject] = useState({
    fullname: "",
    profession: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  const onValChange = (e) => {
    setFormObject({
      ...formObject,
      [e.target.name]: e.target.value,
    });
  };

  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if(objectName[prop]===""){
        return true
      }
    }
    return false;
  };

  const onFormSubmit = (e) => {
    e.preventDefault()
    let verifyOBject = isObjectEmpty(formObject)
    console.log(verifyOBject)
    // const chekValue = Object.values(formObject).every((res) => res.length===0);
    if (!verifyOBject) {
        setTableData((prevState) => {
            return {
              ...prevState,
              formObject,
            };
          });
          setTableData([...tableData, formObject]);
          setFormObject({
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
    } else {
      return toast
    }
  };

  return (
    <div>
      <Header />
      <div className="employee-list">
        <table className="table table-dark">
          <thead className="table-light">
            <tr>
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
          {console.log(tableData)}
          <tbody className="result">
            {tableData.map((data, index) => {
              const {
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
                <tr key={index}>
                  <td>{index + 1}</td>
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
            })}
          </tbody>
        </table>
      </div>
      <AddEmployee
        onFormSubmit={onFormSubmit}
        onValChange={onValChange}
        formObject={formObject}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </div>
  );
};

export default DisplayEmployee;
