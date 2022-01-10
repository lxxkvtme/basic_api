import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSignin from "../components/Form/FormSignin";
import Header from "../components/Header";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const redirect = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };

  const handleSignin = () => {
    const data = {
      email: email,
      password: password,
    };

    if (!errorEmail.length) {
      setErrorEmail("Masukan Email anda");
    }

    if (!errorPassword.length) {
      setErrorPassword("Masukan Password anda");
    }

    if (!!errorEmail.length && !!errorPassword.length) {
      axios
        .post("https://reqres.in/api/login", data)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            alert("Selamat anda telah berhasil login");
            localStorage.setItem("token", res.data.token);
            redirect("/dashboard");
          }
        })
        .catch((err) => alert(err.error));
    }

    console.log(data);
  };

  return (
    <div>
      <Header />
      <h1>Sign in</h1>
      <FormSignin
        email={handleEmail}
        password={handlePassword}
        submit={handleSignin}
        msgError={{ errorEmail, errorPassword }}
      />
    </div>
  );
};

export default Signin;
