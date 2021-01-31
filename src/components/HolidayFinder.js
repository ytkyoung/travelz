import styled from 'styled-components';

import FinderImg from '../img/thousand-01.svg';
import { Description } from '../styles.js';

import Select from 'react-select';

const HolydayFinder = () => {
  const optionsLocation = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Antarctica', label: 'Antarctica' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'NorthAmerica', label: 'North America' },
    { value: 'SouthAmerica', label: 'South America' },
    { value: 'Space', label: 'Space' },
  ];
  const optionsActivity = [
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Kung-Fu', label: 'Kung-Fu' },
    { value: 'Space', label: 'Space' },
    { value: 'Moonwalk', label: 'Moonwalk' },
    { value: 'Action', label: 'Action' },
    { value: 'Shopping', label: 'Shopping' },
    { value: 'Chilling', label: 'chillen' },
    { value: 'Beach', label: 'Beach' },
    { value: 'get-drunk', label: 'get drunk' },
  ];
  const optionsGrade = [
    { value: 'Deluxe', label: 'Deluxe' },
    { value: 'Super Deluxe', label: 'Super Deluxe' },
    { value: 'Mega Deluxe', label: 'Mega Deluxe' },
  ];
  const optionsDate = [
    { value: 'jetzt', label: 'jetzt' },
    { value: 'irgendwann', label: 'irgendwann' },
    { value: 'später', label: 'später' },
    { value: 'bald', label: 'bald' },
    { value: 'demnächst', label: 'demnächst' },
    { value: 'eventuell', label: 'eventuell' },
    { value: 'nie', label: 'nie' },
  ];

  return (
    <>
      <Finder>
        <div className="finder-intro">
          <div className="finder-title">
            <h1>
              Explore and <br /> Travel
            </h1>
          </div>
          <div className="finder-search">
            <h2>Holiday finder</h2>
            <div className="line"></div>
            <div className="drop-wrapper">
              <div className="dropdown">
                <Select
                  className="select"
                  placeholder="Location"
                  options={optionsLocation}
                />
              </div>
              <div className="dropdown">
                <Select
                  className="select"
                  placeholder="Activity"
                  options={optionsActivity}
                />
              </div>
              <div className="dropdown">
                <Select
                  className="select"
                  placeholder="Grade"
                  options={optionsGrade}
                />
              </div>
              <div className="dropdown">
                <Select
                  className="select"
                  placeholder="Date"
                  options={optionsDate}
                />
              </div>
            </div>
            <div className="finder-search-button">
              <button>Explore</button>
            </div>
          </div>
        </div>
        <div className="finder-img">
          <img src={FinderImg} alt="about" />
        </div>
      </Finder>
    </>
  );
};

const Finder = styled(Description)`
  margin-bottom: 10vh;
  width: 90%;
  h1 {
    font-size: 6.4rem;
  }
  .line {
    margin-top: 2rem;
    height: 0.1rem;
    width: 20%;
    background: #2600ff;
  }
  h2 {
    font-family: var(--font-inter);
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 9rem;
  }
  .finder-intro {
    flex: 1 1 50%;

    background: magenta;
  }
  .finder-img {
    flex: 1 4 50%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .finder-title {
    flex: 1 1 100%;
  }
  .finder-search {
    background: #00eeff;
    flex: 1 1 100%;
    h2 {
      font-size: 2.2rem;
    }
  }
  .drop-wrapper {
    width: 90%;
    background: red;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .dropdown {
    width: 22rem;
    margin-top: 4rem;
    background: #00ff00;
    margin-right: 3rem;
    .select {
      font-size: 1.5rem;
    }
  }
  .finder-search-button {
    margin-top: 4rem;
  }

  @media (max-width: 775.98px) {
    background: red;
    flex-direction: column;
    .finder-intro {
      flex: 1 1 100%;
      order: 1;
    }
    .finder-img {
      flex: 1 4 100%;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (min-width: 767.98px) {
    background: blue;
    flex-direction: column;
    .finder-title {
      flex: 1 1 100%;
      order: 1;
    }
    .finder-intro {
      flex: 1 1 100%;
      order: 2;
    }
    .finder-img {
      flex: 1 4 100%;
      order: 3;
    }
    .drop-wrapper {
      width: 80%;
    }
  }

  // Medium devices (tablets, less than 992px)
  @media (min-width: 991.98px) {
    background: green;
    flex-direction: row;
    .finder-intro {
      flex: 1 1 70%;
    }
    .finder-img {
      flex: 1 4 30%;
    }
    .drop-wrapper {
      width: 100%;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (min-width: 1199.98px) {
    background: yellow;
    .finder-intro {
      flex: 1 1 60%;
    }
    .finder-img {
      flex: 1 4 40%;
    }
    .drop-wrapper {
      width: 90%;
    }
  }
  // Large devices (desktops, less than 1200px)
  @media (min-width: 1679.98px) {
    background: magenta;
    .finder-intro {
      flex: 1 1 50%;
    }
    .finder-img {
      flex: 1 4 50%;
    }
  }
`;

export default HolydayFinder;
