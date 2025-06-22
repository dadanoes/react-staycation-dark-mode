import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  transition: color 0.3s ease;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
`;

const PropertyCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px var(--shadow-color);
  height: 215px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:first-child {
    grid-row: span 2;
    height: 100%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px var(--shadow-color);
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  transition: background-color 0.3s ease;
`;

const PropertyDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

const PropertyName = styled.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
`;

const PropertyLocation = styled.p`
  color: white;
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const MostPicked = () => {
  const properties = [
    {
      id: 1,
      name: 'Blue Origin Fams',
      location: 'Jakarta, Indonesia',
      price: '$50 / night',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Ocean Land',
      location: 'Bandung, Indonesia',
      price: '$22 / night',
      discount: '15%',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Stark House',
      location: 'Malang, Indonesia',
      price: '$30 / night',
      discount: '',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Vinna Vill',
      location: 'Batu, Indonesia',
      price: '$40 / night',
      discount: '10%',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Bobox',
      location: 'Medan, Indonesia',
      price: '$35 / night',
      discount: '',
      image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Section>
      <SectionTitle>Most Picked</SectionTitle>
      <PropertyGrid>
        {properties.map((property, index) => (
          <PropertyCard 
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PropertyImage src={property.image} alt={property.name} />
            {property.discount && (
              <DiscountBadge>{property.discount} OFF</DiscountBadge>
            )}
            <PropertyDetails>
              <PropertyName>{property.name}</PropertyName>
              <PropertyLocation>{property.location}</PropertyLocation>
            </PropertyDetails>
          </PropertyCard>
        ))}
      </PropertyGrid>
    </Section>
  );
};

export default MostPicked;
