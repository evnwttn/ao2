import React, { useState, useContext } from "react";
import { GridDataContext } from "../components/contexts/gridDataContext";

export default function Grid() {
  const useGridDataContext = useContext(GridDataContext);
  const [gridData, setGridData] = useState(useGridDataContext);

  return <>{console.log(gridData)}</>;
}
