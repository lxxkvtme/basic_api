import React from "react";

const FormSignin = ({ email, password, submit, msgError }) => {
  return (
    <div>
      <div>
        <label>Email</label>
        <br />
        <input type="email" placeholder="input your email" onChange={email} />
        <br />
        {!msgError.errorEmail.length ? (
          <label>{msgError.errorEmail}</label>
        ) : null}
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="input your password"
          onChange={password}
        />
        <br />
        {!msgError.errorPassword.length ? (
          <label>{msgError.errorPassword}</label>
        ) : null}
      </div>
      <button type="submit" onClick={submit}>
        Sign In
      </button>
    </div>
  );
};

export default FormSignin;
