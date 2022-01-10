import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = ({detailList}) => {
  const handleBack = () => {
    const redirect = useNavigate();
    redirect("/dashboard");
  };

  const handleDetail = (param) => {
    axios
      .get("https://reqres.in/api/users/" + param)
      .then((res) => {
        console.log(res.data.data);
        redirect("/detail/" + param, detailUser={res.data.data});
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <table>
        <tr colspan="2">
          <th>Detail</th>
        </tr>
        <tr>
          <td>
            <img />
          </td>
          <td>
            <td></td>
            <td></td>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Detail;
