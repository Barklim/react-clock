import React from 'react';
import { Clocker } from './components/Clock';
import { arabic, roman} from './components/Clock/constants';

function App() {
  return (
    <>
      {/* <Clocker initialValue={false}> */}
      <Clocker>
        {/* <Clocker.Clock format={roman}/> */}
        <Clocker.Clock/>
        <Clocker.Label>Moscow</Clocker.Label>
      </Clocker>
    </>
  );
}

export default App;
