import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const iconSize = '3x';
  return (
    <FooterWrapper>
      <div className="footer-main">
        <div className="footer-intro">
          <div className="footer-logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="footer-intro-text">
            <p>
              Plan and book your perfect trip with expert advice, travel tips
              destination information from us
            </p>
          </div>
          <div className="footer-copyright">
            <h4>©2020 Thousand Sunny. All rights reserved</h4>
          </div>
        </div>

        <div className="destinations">
          <h3>Destinations</h3>
          <ul>
            <li>
              <Link to="/">Africa</Link>
            </li>
            <li>
              <Link to="/">Antarctica</Link>
            </li>
            <li>
              <Link to="/">Asia</Link>
            </li>
            <li>
              <Link to="/">Europe</Link>
            </li>
            <li>
              <Link to="/">America</Link>
            </li>
          </ul>
        </div>
        <div className="shop">
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/">Destination Guides</Link>
            </li>
            <li>
              <Link to="/">Pictorial & Gifts</Link>
            </li>
            <li>
              <Link to="/">Special Offers</Link>
            </li>
            <li>
              <Link to="/">Delivery Times</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <ul>
            <li>
              <Link to="/">Adventure Travel</Link>
            </li>
            <li>
              <Link to="/">Art And Culture</Link>
            </li>
            <li>
              <Link to="/">Wildlife And Nature</Link>
            </li>
            <li>
              <Link to="/">Family Holidays</Link>
            </li>
            <li>
              <Link to="/">Food And Drink</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social-media">
        <ul>
          <li>
            <FontAwesomeIcon icon={faTwitter} size={iconSize} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebookF} size={iconSize} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} size={iconSize} />
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  background: #f9f9fb;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 5%;
  .footer-main {
    padding: 0% 5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    background: #3f3fdd;
    p {
      width: 50%;
    }
    .footer-logo {
      display: flex;
      justify-content: flex-start;
    }
    .footer-intro {
      flex: 1 1 40%;
      .footer-copyright {
        padding-top: 4rem;
      }
    }

    .destinations {
      flex: 1 1 20%;
    }
    .shop {
      flex: 1 1 20%;
    }
    .interests {
      flex: 1 1 20%;
    }
  }
  .footer-social-media {
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    border-top: 1px solid #e5e5e5;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      padding: 2rem;
    }
  }
  @media (max-width: 775.98px) {
    background: #00d9ff;
    margin: 0 auto;
    padding: 0;
    .footer-main {
      flex-direction: column;
    }
    .destinations {
      flex: 1 1 20%;
      margin-top: 4rem;
    }
    .shop {
      flex: 1 1 20%;
    }
    .interests {
      flex: 1 1 20%;
    }
  }
`;

export default Footer;
