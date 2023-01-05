import React, { useState, useContext } from "react";
import { GridDataContext } from "../components/contexts/gridDataContext";

export default function Grid() {
  const useGridDataContext = useContext(GridDataContext);
  const [gridData, setGridData] = useState(useGridDataContext);

  return (
    <>
      <button onClick={() => console.log(gridData)}>the rig</button>
      <button
        onClick={() =>
          setGridData({
            ...gridData,
            test: "tset",
          })
        }
      >
        test
      </button>
    </>
  );
}
