import styled from 'styled-components';

const FeaturedDesiItem = (props) => {
  return (
    <div className="card">
      <Destination>
        <div className="destination-img">
          <img src={props.destination.img} alt={props.destination.location} />
          <div className="info-box">
            <h2>{props.destination.location}</h2>
            <h3>{props.destination.country}</h3>
          </div>
        </div>
      </Destination>
    </div>
  );
};

const Destination = styled.article`
  background-color: magenta;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 2.5rem;
  .destination-img {
    position: relative;
    height: 332px;
    width: 261px;
  }
  .destination-img img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-box {
    border-top-right-radius: 5px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: white;
    padding: 1.2rem 2rem 0rem 0rem;
    h2 {
      font-size: 1.7rem;
      font-family: var(--font-inter);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    h3 {
      font-size: 1.5rem;
      font-family: var(--font-inter);
      font-weight: 400;
      color: #80918e;
    }
  }
`;

export default FeaturedDesiItem;
