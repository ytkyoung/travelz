import TestimonialItem from '../components/TestimonialItem';
import data from '../data/testimonials.json';
import styled from 'styled-components';

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <div className="testimonials-title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonilas-list">
        {data.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </div>
    </TestimonialWrapper>
  );
};

const TestimonialWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  h2 {
    font-size: 3.6rem;
  }
`;

export default Testimonial;
