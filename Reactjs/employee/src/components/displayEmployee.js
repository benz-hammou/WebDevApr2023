import { useState } from "react";
import AddEmployee from "./addEmployee";
import Header from "./header";
import SearchEmployee from "./searchEmployee";
import Button from "react-bootstrap/Button";
import RemoveEmployee from "./removeEmployee";
import ModifyEmployee from "./modifyEmployee";

const DisplayEmployee = ({
  tableData,
  setTableData,
  errorToast,
  successToast,
}) => {
  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [modifyShow, setModifyShow] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const searchHandleClose = () => setSearchShow(false);
  const modifyHandleClose = () => setModifyShow(false);
  const searchHandleShow = () => setSearchShow(true);
  const modifyHandleShow = () => setModifyShow(true);
  const handleActualize = () => setSearchResult([]);

  const [formObject, setFormObject] = useState({
    id: crypto.randomUUID().split("-")[0].substring(0, 4),
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
    if (!verifyOBject) {
      setTableData((prevState) => {
        return {
          ...prevState,
          formObject,
        };
      });
      setTableData([...tableData, formObject].sort((a, b) => a.id - b.id));

      setFormObject({
        id: crypto.randomUUID().split("-")[0].substring(0, 4),
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
      //   setTableData(tableData.sort((a, b) => a.id - b.id))
    } else {
      errorToast();
    }
  };

  const getValueToModify = () => {
    /*  const get_ID = (e) => {
    }
  modifyHandleShow() */
  };

  const handleEvent = (id) => {
    console.log(id); // 5
    id--
    console.log(tableData[id])
    let newObject = {
        
    }

  };

//   console.log(tableData[0].id);
  // console.log(modify.isEditing);

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
      <Button variant="warning" onClick={handleActualize}>
        Actualize Table
      </Button>
      <ModifyEmployee
        setTableData={setTableData}
        tableData={tableData}
        modifyHandleShow={modifyHandleShow}
        modifyHandleClose={modifyHandleClose}
        modifyShow={modifyShow}
      />
      <RemoveEmployee setTableData={setTableData} tableData={tableData} />

      <div className="employee-list">
        <table className="table table-striped table-dark table-hover ">
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
                    <tr
                      onClick={()=>handleEvent(index)}
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
