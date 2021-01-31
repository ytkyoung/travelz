import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';

class NavigationMobile extends Component {
  state = {
    isShown: true,
  };
  toggleIsShown = () => {
    console.log('TEST');
    this.setState({ isShown: !this.state.isShown });
  };
  render() {
    return (
      <NavStyle>
        {/* <h1 onClick={this.toggleIsShown}>X</h1> */}
        {/* <nav style={{ display: this.state.isShown ? 'block' : 'none' }}> */}
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className={`menu ${this.state.isShown ? 'show' : 'none'}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/partner">Partner</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/counterhook">Counterhoiok</Link>
            </li>
            <li>
              <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
              <Link to="/random">Random Mood</Link>
            </li> */}
          </ul>
        </nav>
        <div className="login">
          <button>Login</button>
          <button>Register</button>
        </div>
      </NavStyle>
    );
  }
}

const NavStyle = styled.header`
  background: red;
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;
  .logo {
    background: blue;
    flex: 1 1 20%;
    display: flex;
    justify-content: flex-start;
    svg {
      width: 100%;
    }
  }
  .menu {
    flex: 1 1 60%;
    background: green;
  }
  .menu ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .menu li {
    padding-left: 3.5rem;
  }

  .login {
    flex: 1 1 20%;
    background: #36f336;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1.5rem;
    button {
      margin-left: 2rem;
    }
  }
  .show {
    display: block;
  }
  .none {
    display: none;
  }
  @media (max-width: 775.98px) {
    flex-direction: column;
  }
  @media (min-width: 767.98px) {
    flex-direction: column;
  }
  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) {
    flex-direction: row;
  }
`;

export default NavigationMobile;
