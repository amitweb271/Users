import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPen,FaTrash ,FaRegEye} from "react-icons/fa";
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <Link className="btn btn-outline-primary float-lg-end" to="/users/add">Add User</Link> 
     
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary btn-sm" to={`/users/${user.id}`}>
                 < FaRegEye/>
                  </Link>
                  <Link
                    class="btn btn-outline-primary  btn-sm"
                    to={`/users/edit/${user.id}`}
                  >
                    <FaPen/>
                  </Link>
                  <Link
                    class="btn btn-danger btn-sm"
                    onClick={() => deleteUser(user.id)}
                  >
                    <FaTrash/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
