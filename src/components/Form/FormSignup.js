import React from "react";

const FormSignup = ({ email, password, submit, msgErrors }) => {
  return (
    <div>
      {/* <div>
        <label>Name</label>
        <br />
        <input type="text" placeholder="input your name" onChange={name} />
        <br />
        {!!msgErrors.errorsName.length ? (
          <label>{msgErrors.errorsName}</label>
        ) : null}
      </div> */}
      <div>
        <label>Email</label>
        <br />
        <input type="email" placeholder="input your email" onChange={email} />
        <br />
        {!!msgErrors.errorsEmail.length ? (
          <label>{msgErrors.errorsEmail}</label>
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
        {!!msgErrors.errorsPassword.length ? (
          <label>{msgErrors.errorsPassword}</label>
        ) : null}
      </div>
      <button type="submit" onClick={submit}>
        Sign Up
      </button>
    </div>
  );
};

export default FormSignup;
