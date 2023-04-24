import { useState } from "react";

const DisplayEmployee = () => {

const [dataBase, setDataBase] = useState([])

/* const obj = {
    id:idValue++,
        fullname:fullNameInput.value,
        profession:professionInput.value,
        gender:genderInput.value,
        nationality:nationalityInput.value,
        address:adressInput.value,
        city:cityInput.value,
        phone:phoneInput.value,
        email:emailInput.value
} */


    
  return (
    <div>
      <div className="employee-list">
        <table className="table table-dark">
          <thead className="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fullname</th>
              <th scope="col">Profession</th>
              <th scope="col">Gender</th>
              <th scope="col">Nationality</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody className="result">
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Developer</td>
              <td>Male</td>
              <td>Belgian</td>
              <td>Street 1, 1000 Brussels</td>
              <td>0123456789</td>
              <td>john@doe.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayEmployee;
