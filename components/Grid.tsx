import React, { useState, useContext } from "react";
import { GridDataContext } from "./contexts";

export const Grid = () => {
  const useGridDataContext = useContext(GridDataContext);
  const [gridData, setGridData] = useState(useGridDataContext);

  return <>Hello!! {console.log(gridData)}</>;
};
