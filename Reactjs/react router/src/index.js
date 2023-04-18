import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'
import Layout from './components/Layout';
import Contact from './components/Contact';
import Blog from './components/Blog';
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Layout>
            <App />
        </Layout> */}
    <BrowserRouter>

    <Header/>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
    </Routes>
    <Footer/>

    </BrowserRouter>
    </React.StrictMode>
)