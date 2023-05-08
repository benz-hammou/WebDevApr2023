import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import DisplayEmployee from "./components/displayEmployee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <ToastContainer />
        <Row>
          <Routes>
            <Route path="/" element={<DisplayEmployee />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
