import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSignup from "../components/Form/FormSignup";
import Header from "../components/Header";

const Signup = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorsName, setErrorsName] = useState("");
  const [errorsEmail, setErrorsEmail] = useState("");
  const [errorsPassword, setErrorsPassword] = useState("");

  // const handleName = (e) => {
  //   setName(e.target.value);
  //   setErrorsName("");
  // };

  const navigasi = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorsEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorsPassword("");
  };

  const handleSignup = () => {
    const data = {
      email: email,
      password: password,
    };

    // if (!name.length) {
    //   setErrorsName("Silahkan isi nama terlebih dahulu");
    // }

    if (!email.length) {
      setErrorsEmail("Silahkan isi password terlebih dahulu");
    }

    if (!password.length) {
      setErrorsPassword("Silahkan isi email terlebih dahulu");
    }

    if (!!email.length && !!password.length) {
      axios
        .post("https://reqres.in/api/register", data)
        .then((res) => {
          console.log(res.data);
          navigasi("/");
          alert("selamat anda telah berhasil masuk Home");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Header />
      <h1>Sign up</h1>
      <FormSignup
        // name={handleName}
        email={handleEmail}
        password={handlePassword}
        submit={handleSignup}
        msgErrors={{ errorsEmail, errorsPassword }}
      />
    </div>
  );
};

export default Signup;
