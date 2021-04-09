import React from "react";

interface Props {
  headerText: string;
}

export default function Header(props: Props) {
  return <h1>{props.headerText}</h1>;
}
