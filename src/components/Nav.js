import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../App";

const Head = styled.header`
  width: 100vw;
  height: 50px;
  background: teal;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation {
    margin-top: 10px;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      list-style: none;
      color: white;
      transition: all 0.35s linear;
    }

    .active {
      text-decoration: underline;
    }
  }
`;

const Nav = () => {
  const { auth, logout } = useContext(AuthContext);

  const history = useHistory();

  return (
    <Head>
      <ul className="navigation">
        <NavLink to="/" exact activeClassName="active">
          <li>Homepage</li>
        </NavLink>
        <NavLink to="/movies" activeClassName="active">
          <li>Movies</li>
        </NavLink>

        {auth && (
          <NavLink to="/reviews" activeClassName="active">
            <li>Review</li>
          </NavLink>
        )}
        
        {auth && auth === "admin" && (
          <NavLink to="/all" activeClassName="active">
            <li>All Reviews</li>
          </NavLink>        
        )}
        {auth && auth === "admin" && (
          <NavLink to="/admin" activeClassName="active">
            <li>Admin</li>
          </NavLink>          
        )}

        {auth ? (
          <p
            style={{ cursor: "pointer", marginTop: '15px' }}
            onClick={() => {
              logout();
              history.push("/");
            }}
          >
            Logout
          </p>
        ) : (
          <NavLink to="/login" activeClassName="active">
            <li>Login</li>
          </NavLink>
        )}
      </ul>
    </Head>
  );
};

export default Nav;
