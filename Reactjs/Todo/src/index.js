import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/globals.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)