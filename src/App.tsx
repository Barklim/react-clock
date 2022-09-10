import React from 'react';
import { Clocker } from './components/Clock';

function App() {
  return (
    <>
      <Clocker>
        <Clocker.Clock />
        <Clocker.Label>Label</Clocker.Label>
      </Clocker>
    </>
  );
}

export default App;
