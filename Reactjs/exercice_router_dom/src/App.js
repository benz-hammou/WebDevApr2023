import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap/'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (

    <BrowserRouter >
      <Navigation id='nav' />

      <Container fluid>
        <Row>

          <Col className='bg-success' id='col-9' md={9}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Col>

          <Col className='bg-secondary text-light' id='col-3' md={3}>
            <Sidebar />
          </Col>

        </Row>
      </Container>

      <Footer className='vh-10 bg-dark' />
    </BrowserRouter>

  )
}

export default App