import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ showLogout }) => {
  const style = {
    marginRight: 20,
  };

  const redirect = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    redirect("/");
  };

  return (
    <div>
      <Link style={style} to="/">
        Home
      </Link>
      <Link style={style} to="/signin">
        Sign In
      </Link>
      <Link style={style} to="/signup">
        Sign Up
      </Link>
      {showLogout === true ? (
        <div>
          <Link style={style} to="/logout" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
