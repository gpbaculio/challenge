import React from 'react';
import styled from 'styled-components';

import { Header, Users } from './components';

const UsersPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <UsersPageContainer>
      <Header />
      <Users />
    </UsersPageContainer>
  );
};

export default App;
