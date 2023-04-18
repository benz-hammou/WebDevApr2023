import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Header from './Header'
import Todo from './components/todo'
import Breakfast from './components/breakfast'
import Lunch from './components/lunch'


const App = () => {
  return (
    <BrowserRouter>
      <section id="menu-list" className="section-padding">
        <div className="container">
          <div className="row">
            <Header>
              <NavMenu />
            </Header>
            <div id="menu-wrapper">
              <Routes>
                <Route path='/todo' element={<Todo />} />
                <Route path='/breakfast' element={<Breakfast />} />
                <Route path='/lunch' element={<Lunch />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter >
  )
}

export default App