import React from "react";
import Header from "./components/header";
import DisplayEmployee from "./components/displayEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchEmployee from "./components/searchEmployee";
import AddEmployee from "./components/addEmployee";
import { Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
        
          <Header />

          <Routes>
            <Route path="/" element={<DisplayEmployee />} />
            <Route path="/search" element={<SearchEmployee />} />
          </Routes>

          <AddEmployee />

        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
