import styled from 'styled-components';
import { Description } from '../styles.js';
import HomeImg from '../img/Thousand-02.svg';

const HomeAbout = () => {
  return (
    <DescriptionHome>
      <div className="teaser-img">
        <img src={HomeImg} alt="about" />
      </div>
      <div className="description">
        <div className="title">
          <h2>A new way to explore the world </h2>
        </div>
        <div className="text">
          <p>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </p>
        </div>
        <div className="button">
          <button>Learn more</button>
        </div>
      </div>
    </DescriptionHome>
  );
};

const DescriptionHome = styled(Description)`
  width: 80%;
  padding: 0 5%;
  margin-top: 10%;
  margin-bottom: 10rem;
  .teaser-img {
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    padding-right: 5rem;
    img {
      width: 100%;
    }
  }
  .description {
    flex: 1 1 50%;
    background: #2e6781;
    .title {
      width: 50%;
    }
    .text {
      width: 60%;
    }
  }
  @media (max-width: 775.98px) {
    width: 100%;
    background: red;
    flex-direction: column;
    .description {
      padding-top: 3rem;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (min-width: 767.98px) {
    background: blue;
    flex-direction: column;
  }

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) {
    background: green;
    flex-direction: row;
    .teaser-img {
      flex: 1 1 50%;
    }
    .description {
      flex: 1 1 50%;
    }
  }
`;

export default HomeAbout;
