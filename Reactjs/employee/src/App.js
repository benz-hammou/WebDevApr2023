
const App = () => {
  return (
    <div class="bg-secondary">
   
    


    <div className="container">
        <h1 className="display-5 text-center my-5 fw-bold text-light">Employees Management</h1>
        

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
        <div className="admin text-center my-5">
            <a href="#" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#addEmployee">Add Employee</a>
            <a href="#" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#searchEmployee">Search Employee</a>
        </div>
    </div>
    </div>
  )
}

export default App