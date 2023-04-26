import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import DisplayEmployee from "./components/displayEmployee";
import SearchEmployee from "./components/searchEmployee";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [tableData, setTableData] = useState([]);
 const Notify = () => {
    toast("default notification !", {
        position: toast.POSITION.TOP_CENTER
    })
 }
  return (
    <BrowserRouter>
      <Container>
    <ToastContainer/>
        <Row>
          <Routes>
            <Route
              path="/"
              element={
                <DisplayEmployee
                  tableData={tableData}
                  setTableData={setTableData}
                  toast={Notify()}
                />
              }
            />
            <Route path="/search" element={<SearchEmployee />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
