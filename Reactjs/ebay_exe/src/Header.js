import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="container-fluid  pb-1">
    <nav className="navbar navbar-expand-lg  border-bottom bg-white flex-column">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <span className="d-flex align-items-center justify-content-center">
                Beste! <a className="nav-link py-1  text-primary" aria-current="page" href>Inloggen</a>
                of <a className="nav-link py-1 text-primary" aria-current="page" href>Injschrijven</a>
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link py-1 text-dark" href>Hulp en contact</a>
            </li>
            <li className="nav-item dropdown">
              <a href className="nav-link py-1">
                <img src="https://ir.ebaystatic.com/cr/v/c01/BENL_doodle_OM_W48_Christmas.jpg" className="img-fluid" alt=""/>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item dropdown">
              <a className="nav-link py-1  dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                🇧🇪 Nederlands
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href>🇧🇪 French</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link py-1 text-dark" href>Verkopen</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link py-1  dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mijn eBay
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href>Over Zicht</a></li>
                <li><a className="dropdown-item" href>Over Zicht</a></li>
                <li><a className="dropdown-item" href>Over Zicht</a></li>
                <li><a className="dropdown-item" href>Over Zicht</a></li>
                <li><a className="dropdown-item" href>Over Zicht</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link py-1 text-dark" href><i className="fa-regular fa-bell"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-1 text-dark" href><i className="fa-solid fa-cart-shopping"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* search bar  */}
    <div className="container bottom-end mt-2 border-bottom">
      <div className="row">
        <div className="col-md-2">
          <div className="input-group row">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/EBay_former_logo.svg/2560px-EBay_former_logo.svg.png" alt="" srcset="" className="img-fluid form-control m-0 p-0 border-0 col-md-8"/>
            <button className="btn btn-white dropdown-toggle rounded-0 col-md-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">Zoeken</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href>Action</a></li>
              <li><a className="dropdown-item" href>Another action</a></li>
              <li><a className="dropdown-item" href>Something else here</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href>Separated link</a></li>
            </ul>
          </div>

        </div>
        <div className="col-md-10">
          <div className="input-group mb-3 row">
            <input type="text" className="form-control rounded-0 fa col-md-8" aria-label="Text input with dropdown button" placeholder="&#xF002; Lets zoeken"/>
            <button className="btn btn-primary dropdown-toggle rounded-0 col-md-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Zoeken</button>
            <button type="button" className="btn btn-outline-primary col-md-2">Uitgebreid zoeken</button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href>Action</a></li>
              <li><a className="dropdown-item" href>Another action</a></li>
              <li><a className="dropdown-item" href>Something else here</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href>Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* main-nav */}
    <div className="container mt-2">
      <div className="row row-cols-auto justify-content-center align-items-center gx-4 main-nav">
        <div className="col">
          <p>Home</p>
        </div>
        <div className="col">
          <p>Opgeslagen</p>
        </div>
        <div className="col">
          <p>Mode</p>
        </div>
        <div className="col">
          <p>Elektronica</p>
        </div>
        <div className="col">
          <p>Huis & Tuin</p>
        </div>
        <div className="col">
          <p>Boeken,Films & Muzik</p>
        </div>
        <div className="col">
          <p>Vrije Tijd</p>
        </div>
        <div className="col">
          <p>Verzamelen</p>
        </div>
        <div className="col">
          <p>Auto's & Motoren</p>
        </div>
        <div className="col">
          <p>eBay Deals</p>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header