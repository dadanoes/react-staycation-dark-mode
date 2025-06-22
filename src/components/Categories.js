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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px var(--shadow-color);
  }
`;

const CategoryImage = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${CategoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const PopularBadge = styled.div`
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

const CategoryDetails = styled.div`
  padding: 1.5rem;
  background-color: var(--card-bg);
  transition: background-color 0.3s ease;
`;

const CategoryName = styled.h3`
  color: var(--text-color);
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;
`;

const CategoryLocation = styled.p`
  color: var(--text-color);
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: color 0.3s ease;
`;

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Houses with beauty backyard',
      location: '16 properties',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 2,
      name: 'Hotels with large living room',
      location: '12 properties',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      isPopular: false
    },
    {
      id: 3,
      name: 'Apartments with kitchen set',
      location: '8 properties',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 4,
      name: 'Cozy and Peaceful',
      location: '14 properties',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      isPopular: false
    }
  ];

  return (
    <Section>
      <SectionTitle>Browse by Category</SectionTitle>
      <CategoryGrid>
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryImage>
              <Image src={category.image} alt={category.name} />
              {category.isPopular && (
                <PopularBadge>Popular Choice</PopularBadge>
              )}
            </CategoryImage>
            <CategoryDetails>
              <CategoryName>{category.name}</CategoryName>
              <CategoryLocation>{category.location}</CategoryLocation>
            </CategoryDetails>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </Section>
  );
};

export default Categories;
