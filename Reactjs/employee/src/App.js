import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import DisplayEmployee from "./components/displayEmployee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tableData, setTableData] = useState([
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Dewey Johnson",
      profession: "Product Group Agent",
      gender: "F2M",
      nationality: "Democratic People's Republic of Korea",
      address: "124 Doyle Streets",
      city: "Fort Adriannafurt",
      phone: "705-878-5675 x748",
      email: "Trevion.Hegmann38@gmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Dr. Sally Rath",
      profession: "Product Division Agent",
      gender: "Androgynous",
      nationality: "Czech Republic",
      address: "63659 Block Crescent",
      city: "Fort Lucienne",
      phone: "(271) 468-6664 x1816",
      email: "Kaycee_Hagenes@hotmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Ms. Brenda Denesik",
      profession: "Principal Accountability Executive",
      gender: "Cis male",
      nationality: "Australia",
      address: "853 Lillie Pike",
      city: "Damionland",
      phone: "1-299-683-8739 x21822",
      email: "America17@yahoo.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Valerie Kilback",
      profession: "Legacy Implementation Associate",
      gender: "Neither",
      nationality: "Panama",
      address: "60415 Carmen Greens",
      city: "McLaughlinfield",
      phone: "(338) 299-0033 x779",
      email: "Jeromy.Fisher@yahoo.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Antonia Armstrong IV",
      profession: "National Accountability Associate",
      gender: "Trans",
      nationality: "Nepal",
      address: "2156 Heaney Ville",
      city: "Port Theron",
      phone: "635.610.6044 x228",
      email: "Elinore29@hotmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Rebecca Smith",
      profession: "Legacy Intranet Facilitator",
      gender: "Trans man",
      nationality: "Georgia",
      address: "4752 Wolf Square",
      city: "Port Eleazar",
      phone: "1-247-898-9851 x60783",
      email: "Gabe_Upton@gmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Joanne Crooks",
      profession: "Principal Functionality Designer",
      gender: "FTM",
      nationality: "Morocco",
      address: "375 Heller Course",
      city: "Bergstromworth",
      phone: "708.878.7552 x2294",
      email: "Otis.Hermann@hotmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Mrs. Lorraine Jast",
      profession: "Lead Functionality Representative",
      gender: "Demi-boy",
      nationality: "Iceland",
      address: "80664 Kautzer Tunnel",
      city: "Keyshawnton",
      phone: "1-209-428-3516 x1751",
      email: "Gladys_Koss29@hotmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Ann Renner",
      profession: "Forward Integration Officer",
      gender: "Polygender",
      nationality: "New Caledonia",
      address: "88767 Maximilian Forges",
      city: "Kathlynstad",
      phone: "(702) 907-1713 x9396",
      email: "Bianka6@gmail.com",
    },
    {
      id: crypto.randomUUID().split('-')[0].substring(0,4),
      fullname: "Ms. Grady Wolf",
      profession: "District Response Assistant",
      gender: "Cis female",
      nationality: "Papua New Guinea",
      address: "1068 Dena Ports",
      city: "Mission",
      phone: "(831) 878-8549 x884",
      email: "Domenick42@gmail.com",
    },
  ].sort((a, b) => a.id - b.id));

  useEffect(() => {
   
  }, []);

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
