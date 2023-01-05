import React from "react";
import { Session } from "../types";

interface GridProps {
  gridData: Session;
}

export const Grid = ({ gridData }: GridProps) => {
  console.log(gridData);
  return <></>;
};
