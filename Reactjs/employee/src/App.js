import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import DisplayEmployee from "./components/displayEmployee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tableData, setTableData] = useState([]);

  const errorToast = () => {
    toast.error("Please complete all the inputs !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const successToast = () => {
    toast.success("New employer added !", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1000,
    });
  };

  return (
    <BrowserRouter>
      <Container>
        <ToastContainer />
        <Row>
          <Routes>
            <Route
              path="/"
              element={
                <DisplayEmployee
                  tableData={tableData}
                  setTableData={setTableData}
                  errorToast={errorToast}
                  successToast={successToast}
                />
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
