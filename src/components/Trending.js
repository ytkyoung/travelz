import TrendingItem from '../components/TrendingItem';
import data from '../data/trending.json';
import styled from 'styled-components';

const FeaturedDestinations = () => {
  return (
    <Trending>
      <div className="trending-cards">
        <div className="cards">
          {data.map((trend, index) => (
            <TrendingItem key={index} trend={trend} />
          ))}
        </div>
      </div>
    </Trending>
  );
};

const Trending = styled.section`
  background: red;
  width: 90%;
  margin: 20vh auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .trending-cards {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1em;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  .cards {
    padding-left: 13rem;
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }
  @media (max-width: 775.98px) {
    background: red;
    margin: 10vh auto;
    .cards {
      padding-left: 0rem;
      margin-bottom: 5%;
    }
  }
  @media (min-width: 767.98px) {
    flex-direction: row;
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
