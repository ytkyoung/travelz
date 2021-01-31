import FeaturedDesiItem from '../components/FeaturedDesiItem';
import data from '../data/destinations.json';
import styled from 'styled-components';

const FeaturedDestinations = () => {
  return (
    <Featured>
      <div className="featured-cards">
        {data.map((destination, index) => (
          <FeaturedDesiItem key={index} destination={destination} />
        ))}
      </div>
    </Featured>
  );
};

const Featured = styled.section`
  background: green;
  width: 80%;
  height: 100%;
  margin: 5vh auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .featured-cards {
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 1rem 1rem 2rem 2rem;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  .cards {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-bottom: 2rem;
  }
  @media (min-width: 767.98px) {
    flex-direction: row;
    width: 90%;
    .cards {
      padding-left: 0rem;
    }
  }
  // Large devices (desktops, less than 1200px)
  @media (min-width: 1679.98px) {
    .cards {
      padding-left: 17rem;
    }
  }
`;

export default FeaturedDestinations;
