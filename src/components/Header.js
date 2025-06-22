import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  background-color: var(--card-bg);
  box-shadow: 0 2px 10px var(--shadow-color);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  margin-left: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Staycation</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/stories">Stories</NavLink>
          <NavLink to="/agents">Agents</NavLink>
          <ThemeToggle />
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
