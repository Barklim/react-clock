import React, { ReactNode, useState } from "react";
import { ClockProvider } from "../../hooks/useClockContext";
import { Clock } from "./Clock";
import { Label } from "./Label";

type ContentProps = {
  children: ReactNode;
  initialValue: boolean | null
}

const Clocker = ({ initialValue, ...props} : ContentProps ) => {
  // const [loading, setLoading] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  return (
    <ClockProvider value={{loading, setLoading}}>
      {props.children}
    </ClockProvider>
  );
}

Clocker.defaultProps = {
  initialValue: false,
};

Clocker.Clock = Clock;
Clocker.Label = Label;

export { Clocker };