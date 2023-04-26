import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import DisplayEmployee from "./components/displayEmployee";
import SearchEmployee from "./components/searchEmployee";

const App = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Routes>
            <Route
              path="/"
              element={
                <DisplayEmployee
                  tableData={tableData}
                  setTableData={setTableData}
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
