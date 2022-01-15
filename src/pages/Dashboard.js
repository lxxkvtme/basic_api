import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
  const redirect = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Anda belum login");
      redirect("/");
    }

    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDetail = (id) => {
    redirect("/detail/" + id);
  };

  console.log("list", list);

  return (
    <div>
      <Header showLogout={true} />
      <h1>Dashboard</h1>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDetail(user.id)}>Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
