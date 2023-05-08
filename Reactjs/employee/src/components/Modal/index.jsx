import React from "react";
import { Modal } from "react-bootstrap";
import SearchEmployee from "../searchEmployee";
import RemoveEmployee from "../removeEmployee";
import EmployeeForm from "../FormEmployee";

export default function CustomModal({
  showModal,
  handleClose,
  type,
  onFormSubmit,
  onValChange,
  employee,
  deleteEmployee,
  employees,
  setSearchResult,
}) {
  const renderModalContent = () => {
    switch (type) {
      case "new":
      case "modify":
        return (
          <EmployeeForm
            onFormSubmit={onFormSubmit}
            onValChange={onValChange}
            employee={employee}
            handleClose={handleClose}
          />
        );
      case "search":
        return (
          <SearchEmployee
            handleClose={handleClose}
            employees={employees}
            setSearchResult={setSearchResult}
          />
        );
      case "remove":
        return (
          <RemoveEmployee
            handleClose={handleClose}
            deleteEmployee={deleteEmployee}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} size="lg" centered>
      {renderModalContent()}
    </Modal>
  );
}
