import React from 'react';
import { MOCK_PACKAGES } from './constants';
import { B2CHome } from './components/B2CComponents';

const App: React.FC = () => {
  return (
    <B2CHome 
      packages={MOCK_PACKAGES} 
    />
  );
};

export default App;