import React from "react";

function SearchEmployee() {
  return (
    <div>
      <div
        class="modal fade modal-lg"
        id="searchEmployee"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Search Employee
              </h5>
              <button
                type="button"
                class="btn-close searchEmployee"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-9">
                  <label for="inputCity" class="form-label">
                    Search by Column
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-3">
                  <label for="inputState" class="form-label">
                    Select Column
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Fullname</option>
                    <option>Profession</option>
                    <option>Gender</option>
                    <option>Birthdate</option>
                    <option>Nationality</option>
                    <option>Address</option>
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#searchEmployee"
      >
        Search Employee
      </a>
    </div>
  );
}

export default SearchEmployee;
