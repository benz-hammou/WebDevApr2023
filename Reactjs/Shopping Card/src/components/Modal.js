// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const Modal = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (

    

    <div>
      <div className="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cart Summary</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/* <!-- body --> */}

              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody className="cart-summary">
                        {/*   <!-- <tr>
                          <td>Product 1</td>
                          <td>$20.00</td>
                        </tr> --> */}

                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4">
                    <h2>Cart Total</h2>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td><strong>Total</strong></td>
                          <td><strong className="total_price">€100.00</strong></td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Clear</button>
              <button type="button" className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal