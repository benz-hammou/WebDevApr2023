import React from 'react'
// import Modal from './Modal'

const Header = () => {
  return (
    <div>
   
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href><i className="fas fa-warehouse me-2"></i>1337's Warehouse</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href aria-current="page">Products <span
                                    className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href aria-current="page">Summary Cart <span
                                    className="visually-hidden">(current)</span></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    {/* <Modal/> */}
   
    </div>
  )
}

export default Header