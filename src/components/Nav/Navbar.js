import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  background: red;
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0% 5%;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    background: #00f7ff;
    min-height: 10vh;
  }
`;
export default Navbar;
