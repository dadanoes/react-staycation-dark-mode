import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaArrowRight } from 'react-icons/fa';

const TestimonialSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  background-color: var(--card-bg);
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const TestimonialImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestimonialImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px var(--shadow-color);
  transition: box-shadow 0.3s ease;
`;

const TestimonialTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Star = styled.div`
  color: #FFD700;
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  opacity: 0.9;
  transition: color 0.3s ease;
`;

const TestimonialAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  opacity: 0.8;
  transition: color 0.3s ease;
`;

const ReadStoryButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 1rem;
  transition: color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 5px var(--shadow-color);
  }
  
  svg {
    margin-left: 0.5rem;
  }
  
  @media (max-width: 768px) {
    margin: 1rem auto;
    justify-content: center;
  }
`;

const Testimonial = () => {
  return (
    <TestimonialSection>
      <TestimonialContent>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialTitle>Happy Travelers</TestimonialTitle>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <Star key={i}><FaStar /></Star>
            ))}
          </Stars>
          <TestimonialText>
            "What a great trip with my family and I should try again next time soon. 
            It was very memorable and I would recommend others to stay at this place!"
          </TestimonialText>
          <TestimonialAuthor>Angga, Product Designer</TestimonialAuthor>
          <ReadStoryButton>
            Read Their Story <FaArrowRight />
          </ReadStoryButton>
        </motion.div>
      </TestimonialContent>
      
      <TestimonialImageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TestimonialImage 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
            alt="Happy travelers" 
          />
        </motion.div>
      </TestimonialImageContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
