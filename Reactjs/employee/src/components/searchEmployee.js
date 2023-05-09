import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiDeleteBack2Fill } from "react-icons/ri";

function SearchEmployee({ employees, setSearchResult, clearSearchResult }) {
  const handleFilter = (e) => {
    const input = e.target.value;
    const filteredData = employees.filter((employee) =>
      employee.fullname.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  return (
   
      <InputGroup className="w-50 search_btn">
        <Form.Control
          placeholder="Search Employee by Fullname"
          aria-describedby="basic-addon2"
          onChange={handleFilter}
          type="text"
          autoFocus
        />
        <Button
          className="bg-warning btn_clear"
          variant="outline-dark"
          id="button-addon2"
          onClick={clearSearchResult}
        >
          <RiDeleteBack2Fill />
        </Button>
      </InputGroup>
   
  );
}

export default SearchEmployee;
