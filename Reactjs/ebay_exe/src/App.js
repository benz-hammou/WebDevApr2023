import React from 'react'
import Header from './Header'
import Footer from './Footer'


const App = () => {
  return (
    <div>
     <Header/>
     <main>
    <div className="container">
      <div id="carouselExampleDark" className="carousel carousel-dark slide text-light" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://i.ebayimg.com/images/g/3SYAAOSwb95jh2M-/s-l960.webp" className="d-block w-100 slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-light">
              <h5>Creëer uw eigen winter wonderland</h5>
              <button type="button" className="btn btn-outline-light fw-bold">Nu Winkelen <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://i.ebayimg.com/images/g/3SYAAOSwb95jh2M-/s-l960.webp" className="d-block w-100 slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-light">
              <h5>Tijd om te versieren.</h5>
              <button type="button" className="btn btn-outline-light fw-bold">Nu Winkelen <i className="fa-solid fa-arrow-right"></i></button>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="container mt-2">
      <p className="lead">Meest gezochte en verkochte items</p>
      <div className="row justify-content-center align-items-center">
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
        <div className="hl-image hl-image-js js-only hl-popular-destinations-image hl-image__fill col" data-size="100">
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_gift.jpg" alt="" data-hl-atf="1" data-load-time="1671450024789"/>
          <p className=" text-center">
            Ontdek de feestaanbiedingen op eBay
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="ads bg-danger text-light p-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-1">
            <i className="fa-solid fa-gift"></i>
          </div>
          <div className="col-md-9">
            <h1 className="h4">Tijd om te verieren</h1>
            <p className="h6">Start de feestdagen met de beste aanbiedingen op eBay</p>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-outline-light fw-bold">Nu winkelen <i className="fa-solid fa-arrow-right-long"></i></button>
          </div>
        </div>
      </div>

      <div id="carouselExampleSlidesOnly" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ebayimg.com/images/g/0j4AAOSw38hjihiC/s-l960.webp" className="d-block w-100" alt="..."/>
          </div>

        </div>
      </div>

      <div className="row my-3 p-3">
        <div className="col-md-3">
          <p className="h3 text-danger">Breng de kerstsfeer in huis!</p>
          <p className="h6">Feestdecoraties en prachtige kerstballen. Voor ieder wat wils.</p>
          <button type="button" className="btn btn-outline-danger rounded-0">Nu Winkelen <i className="fa-solid fa-arrow-right-long"></i></button>

        </div>
        <div className="col-md-9">
          <img src="https://i.ebayimg.com/images/g/0j4AAOSw38hjihiC/s-l960.webp" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
    </div>
  )
}

export default App