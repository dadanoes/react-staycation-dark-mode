import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 4rem 0 2rem;
  margin-top: 3rem;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 30px;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h3`
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const FooterText = styled.p`
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: color 0.3s ease;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: var(--text-color);
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h4`
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
`;

const FooterLink = styled.a`
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease, opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: var(--primary-color);
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--shadow-color);
  margin-top: 3rem;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.9rem;
  transition: color 0.3s ease, border-color 0.3s ease;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo>Staycation</Logo>
          <FooterText>
            We provide what you need to enjoy your holiday with family. 
            Time to make another memorable moments.
          </FooterText>
          <SocialIcons>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#">
              <FaLinkedinIn />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>For Beginners</FooterTitle>
          <FooterLink href="#">New Account</FooterLink>
          <FooterLink href="#">Start Booking</FooterLink>
          <FooterLink href="#">Use Payments</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Explore Us</FooterTitle>
          <FooterLink href="#">Our Careers</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Connect Us</FooterTitle>
          <FooterLink href="#">support@staycation.id</FooterLink>
          <FooterLink href="#">021 - 2208 - 1996</FooterLink>
          <FooterLink href="#">Staycation, Jakarta</FooterLink>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        Copyright 2023 • All rights reserved • Staycation
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
