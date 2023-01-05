import React from "react";
import { Session } from "../types";

interface GridProps {
  gridData: Session;
}

export const Grid = ({ gridData }: GridProps) => {
  return <>Hello!! {console.log("Hello!")}</>;
};
