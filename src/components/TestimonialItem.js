import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const TestimonialsItem = (props) => {
  const iconSize = '1x';
  return (
    <Testimonials>
      <div className="testimonial-intro">
        <div className="stars">
          <h2>{props.testimonial.stars}</h2>
        </div>
        <div className="testimonial-info-box">
          <p>{props.testimonial.text}</p>
          <h3>{props.testimonial.name}</h3>
          <h4>{props.testimonial.occupation}</h4>
        </div>
      </div>
      <div className="img-wrapper">
        <div className="testimonial-img">
          <img src={props.testimonial.img} alt={props.testimonial.name} />
          <div className="slider-controll">
            <div className="previous">
              <h3>
                <FontAwesomeIcon icon={faChevronLeft} size={iconSize} />
              </h3>
            </div>
            <div className="next">
              <h3>
                <FontAwesomeIcon icon={faChevronRight} size={iconSize} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Testimonials>
  );
};

const Testimonials = styled.article`
  background-color: limegreen;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 2.4rem;
    font-family: var(--font-mulish);
    font-weight: regular;
  }
  .testimonial-intro {
    flex: 1 1 40%;
    background: blue;
  }

  .img-wrapper {
    flex: 1 1 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: red;
  }

  .testimonial-img {
    position: relative;
    padding-left: 5%;
  }

  .testimonial-img img {
    border-radius: 10px;
  }
  .testimonial-info-box {
    width: 80%;

    h4 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }

  .slider-controll {
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: white;
    border-top-left-radius: 10px;
    padding: 1.2rem 0rem 0rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 1.6rem;
    }

    & div {
      margin: 0.5rem;
      border: 2px solid black;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      line-height: 17px;
      vertical-align: middle;
      padding: 10px;
    }
  }
  .stars {
    h2 {
      font-size: 1.6rem;
      letter-spacing: 1rem;
    }
  }
  @media (max-width: 775.98px) {
    background: red;
    flex-direction: column;
    .testimonial-intro {
      order: 3;
    }
    .img-wrapper {
      order: 2;
    }
    .testimonial-img {
      position: relative;
      padding: 0;
    }
  }
`;

export default TestimonialsItem;
