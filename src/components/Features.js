import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHotel, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  background-color: var(--card-bg);
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--card-hover);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--card-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: var(--primary-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const FeatureNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: var(--text-color);
  transition: color 0.3s ease;
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.7;
  margin: 0;
  transition: color 0.3s ease;
`;

const Features = () => {
  const [travelerCount, setTravelerCount] = useState(0);
  const [treasureCount, setTreasureCount] = useState(0);
  const [cityCount, setCityCount] = useState(0);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate counters
      const travelerInterval = setInterval(() => {
        setTravelerCount(prev => {
          if (prev < 80) return prev + 1;
          clearInterval(travelerInterval);
          return prev;
        });
      }, 30);
      
      const treasureInterval = setInterval(() => {
        setTreasureCount(prev => {
          if (prev < 1200) return prev + 20;
          clearInterval(treasureInterval);
          return prev;
        });
      }, 20);
      
      const cityInterval = setInterval(() => {
        setCityCount(prev => {
          if (prev < 50) return prev + 1;
          clearInterval(cityInterval);
          return prev;
        });
      }, 40);
      
      return () => {
        clearInterval(travelerInterval);
        clearInterval(treasureInterval);
        clearInterval(cityInterval);
      };
    }
  }, [inView, controls]);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <FeaturesSection ref={ref}>
      <FeaturesGrid>
        <FeatureItem
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <IconContainer>
            <FaHotel />
          </IconContainer>
          <FeatureNumber>{travelerCount}</FeatureNumber>
          <FeatureText>Travelers</FeatureText>
        </FeatureItem>
        
        <FeatureItem
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <IconContainer>
            <FaTrophy />
          </IconContainer>
          <FeatureNumber>{treasureCount}</FeatureNumber>
          <FeatureText>Treasures</FeatureText>
        </FeatureItem>
        
        <FeatureItem
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <IconContainer>
            <FaMapMarkerAlt />
          </IconContainer>
          <FeatureNumber>{cityCount}</FeatureNumber>
          <FeatureText>Cities</FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
