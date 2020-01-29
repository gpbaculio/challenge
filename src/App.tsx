import React from 'react';

import { Header, Users } from './components';

const App: React.FC = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column overflow-hidden">
      <Header />
      <Users />
    </div>
  );
};

export default App;
