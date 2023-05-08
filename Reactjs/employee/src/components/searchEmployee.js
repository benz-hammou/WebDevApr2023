import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchEmployee({ employees, setSearchResult, clearSearchResult }) {
  const handleFilter = (e) => {
    const input = e.target.value;
    const filteredData = employees.filter((employee) =>
      employee.fullname.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  return (
  
      <InputGroup className="w-50" >
        <Form.Control
          placeholder="Search Employee by Fullname"
          aria-describedby="basic-addon2"
          onChange={handleFilter}
          type="text"
          
          autoFocus
        />
        <Button className="bg-warning" variant="outline-dark" id="button-addon2" onClick={clearSearchResult}>
          X
        </Button>
      </InputGroup>
  
  );
}

export default SearchEmployee;
