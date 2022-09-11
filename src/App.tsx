import React from 'react';
import { Clocker } from './components/Clock';
import { emoji, roman} from './components/Clock/constants';
import styled from 'styled-components';

const StyledWrap = styled.div`
  margin: 22vh 0;
`;

function App() {
  return (
    <>
        <Clocker>
          <Clocker.Clock/>
        </Clocker>

      {/* Uncomment/comment ↑ ↓*/}

      {/* <StyledWrap>
        <Clocker>
          <Clocker.Clock/>
        </Clocker>
      </StyledWrap>
      <StyledWrap>
        <Clocker>
          <Clocker.Clock format={roman}/>
          <Clocker.Label>Moscow</Clocker.Label>
        </Clocker>
      </StyledWrap>
      <StyledWrap>
        <Clocker>
          <Clocker.Clock format={emoji}/>
          <Clocker.Label>Moscow</Clocker.Label>
        </Clocker>
      </StyledWrap> */}
    </>
  );
}

export default App;
