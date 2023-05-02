import { useState } from "react";
import AddEmployee from "./addEmployee";
import Header from "./header";
import SearchEmployee from "./searchEmployee";
import Button from 'react-bootstrap/Button';

const DisplayEmployee = ({
  tableData,
  setTableData,
  errorToast,
  successToast,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchShow, setSearchShow] = useState(false);
  const searchHandleClose = () => setSearchShow(false);
  const searchHandleShow = () => setSearchShow(true);
  const [actualize, setActualize] = useState(false);
 
 
  
  const [searchResult, setSearchResult] = useState([]);

  const [formObject, setFormObject] = useState({
    id: Math.floor(Math.random()*10),
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
      if (objectName[prop] === "") {
        return true;
      }
    }
    return false;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let verifyOBject = isObjectEmpty(formObject);

    // console.log(verifyOBject)
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
        id: Math.floor(Math.random()*10),
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
      successToast();
    } else {
      errorToast();
    }
  };

  return (
    <div>
      <Header />
      <AddEmployee
        onFormSubmit={onFormSubmit}
        onValChange={onValChange}
        formObject={formObject}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <SearchEmployee
        searchShow={searchShow}
        setTableData={setTableData}
        tableData={tableData}
        setSearchShow={setSearchShow}
        searchHandleShow={searchHandleShow}
        searchHandleClose={searchHandleClose}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <Button variant="warning" onClick={setActualize(()=> true)}>Actualize Employee</Button>

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
                    <tr key={index ++}>
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
              : tableData.map((data, index) => {
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
                    <tr key={index ++}>
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
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayEmployee;
