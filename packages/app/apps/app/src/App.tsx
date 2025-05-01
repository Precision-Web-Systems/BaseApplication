import React from 'react';
import { sharedFunction } from '@repo/shared';

const App: React.FC = () => {
  return (
    <div>
      <h1>RSBuild App</h1>
      <p>{sharedFunction()}</p>
    </div>
  );
};

export default App; 