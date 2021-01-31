import styled from 'styled-components';

const TrendingItem = (props) => {
  return (
    <div className="card">
      <Trend>
        <div className="trending">
          <div className="destination-img">
            <img src={props.trend.img} alt={props.trend.title} />
          </div>
        </div>
        <div className="info-box">
          <div className="info-title">
            <h2>{props.trend.title}</h2>
          </div>
          <div className="info-text">
            <p>{props.trend.text}</p>
          </div>
        </div>
      </Trend>
    </div>
  );
};

const Trend = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 2.5rem;
  .destination-img {
    height: 300px;
    width: 261px;
  }
  .destination-img img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-box {
    background: green;
    padding-right: 1rem;
    width: 261px;
    h2 {
      font-size: 1.9rem;
      font-family: var(--font-inter);
      font-weight: 600;
      margin-bottom: 0.5rem;
      line-height: 130%;
    }
    p {
      font-size: 1.5rem;
      font-family: var(--font-inter);
      font-weight: 400;
      color: #80918e;
    }
  }
`;

export default TrendingItem;
