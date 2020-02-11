import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100vw;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #f8f9fa;
`;

const Header = () => (
  <HeaderContainer>
    <h2>Users</h2>
  </HeaderContainer>
);

export default Header;
