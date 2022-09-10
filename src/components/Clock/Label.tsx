import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

const Label = (props: Props) => {
    return <div>{props.children}</div>;
}

export { Label };