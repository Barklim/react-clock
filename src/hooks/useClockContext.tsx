import React, { ReactNode, useContext } from 'react';
import { ClockerCtx, ClockerContext } from '../contexts/clocker';
import helpers from '../helpers'

interface Props {
  children: ReactNode;
  value: ClockerCtx | null;
}

function ClockProvider(props: Props) {
  return (
    <ClockerContext.Provider value={props.value}>{props.children}</ClockerContext.Provider>
  );
}

function useClockContext() {
  const context = useContext(ClockerContext);
  if (context === undefined) {
    helpers.getErrorMessage(`useClockContext must be used within a ClockProvider`);
  }
  return context;
}

export { ClockProvider, useClockContext };