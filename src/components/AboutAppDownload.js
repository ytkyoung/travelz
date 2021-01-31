import styled from 'styled-components';
import AboutImg from '../img/Thousand-03.svg';
import { Description } from '../styles.js';

const AboutAppDownload = () => {
  return (
    <>
      <AboutTeaser>
        <div className="teaser-img">
          <img src={AboutImg} alt="AboutImg" />
        </div>
        <div className="description">
          <div className="title">
            <h2>Guides by Thousand Sunny</h2>
          </div>
          <div className="text">
            <p>
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </p>
          </div>
          <div className="button">
            <button>Download</button>
          </div>
        </div>
      </AboutTeaser>
    </>
  );
};
const AboutTeaser = styled(Description)`
  width: 70%;
  margin-top: 10%;
  margin-bottom: 10rem;
  .teaser-img {
    flex: 1 1 50%;
    order: 1;
    padding-left: 5rem;
    img {
      width: 100%;
    }
  }
  .description {
    flex: 1 1 50%;
  }
  @media (max-width: 775.98px) {
    background: red;
    flex-direction: column;
    width: 90%;
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

export default AboutAppDownload;
