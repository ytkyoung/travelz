import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const RightNav = (props) => {
  const { open, setOpen } = props;
  return (
    <NavStyle>
      <Ul open={open}>
        <ul className="menu">
          <li>
            <h2>
              <NavLink
                exact
                to="/"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Home
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/destination"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Destination
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/about"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                About
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/partner"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Partner
              </NavLink>
            </h2>
          </li>
          <li>
            <h2>
              <NavLink
                to="/contact"
                onClick={() => setOpen(!open)}
                activeClassName="selected"
              >
                Contact
              </NavLink>
            </h2>
          </li>
        </ul>
        <div className="login">
          <button>Login</button>
          <button>Register</button>
        </div>
      </Ul>
    </NavStyle>
  );
};
const NavStyle = styled.div`
  background: #0066ff;
  width: 50%;
  z-index: 30;
  .selected {
    color: #9cf5a6;
    text-decoration-line: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }
  h2 {
    position: relative;
    background: #0d757d;
    width: 100%;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
    margin: 0rem auto 0;
  }
  h2 > a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  h2 > a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #9cf5a6;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  h2 > a:hover:before,
  h2 > a:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  a:hover {
    color: #9cf5a6;
  }
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const Ul = styled.div`
  list-style: none;
  display: flex;

  .menu {
    flex: 1 1 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: green;
    padding: 2rem;
  }
  .login {
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-right: 2rem;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 10vh;
    transition: transform 0.3s ease-in-out;

    .menu {
      flex: 1 1 30%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background: red;
      width: 80%;
    }
    li {
      color: #fff;
      padding: 1.3rem 0rem;
    }
    a {
      font-size: 3rem;
    }
    .login {
      margin-top: 2rem;
      button {
        margin: 1.5rem;
      }
    }
  }
`;
export default RightNav;
