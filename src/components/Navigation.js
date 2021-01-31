import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav``;
export default Navigation;
