import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [detailUser, setDetailUser] = useState({});
  const redirect = useNavigate();
  const param = useParams();

  useEffect(() => {
    console.log(param);
    getDataDetail(param.id);
  }, []);

  const handleBack = () => {
    redirect("/dashboard");
  };

  const getDataDetail = (id) => {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((res) => {
        console.log(res.data.data);
        setDetailUser(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <h3>Detail User</h3>
        <table>
          <tr>
            <td rowSpan={5}>
              <img src={detailUser.avatar} />
            </td>
            <td>
              Name : {detailUser.first_name} {detailUser.last_name}
            </td>
          </tr>
          <tr>
            <td>email : {detailUser.email}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Detail;
