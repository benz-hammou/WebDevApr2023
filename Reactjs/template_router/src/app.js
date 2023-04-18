import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Ebay from './components/projects/ebay'
import Budget from './components/projects/budget'
import Menu from './components/projects/menu'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import Home from './components/home'
import { Container, Row, Col } from 'react-bootstrap'


const App = () => {
  return (

    <BrowserRouter >
      <Header />
      <Container style={{ minHeight: '82vh' }}>
        <Row>
          <Col md={3} className="bg-secondary pt-5 ">
            <Sidebar />
          </Col>
          <Col md={9}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ebay' element={<Ebay />} />
              <Route path='/budget' element={<Budget />} />
              <Route path='/menu' element={<Menu />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>

  )
}

export default App