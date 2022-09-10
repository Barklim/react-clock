import React, { ReactNode } from "react";
import { Clock } from "./Clock";
import { Label } from "./Label";

interface ContentProps {
  children: ReactNode;
}

const Clocker = ( props: ContentProps ) => {
  console.log(props)
  return (
    <>{props.children}</>
  );
}

Clocker.Clock = Clock;
Clocker.Label = Label;

export { Clocker };