import React, { createContext, useContext, useState } from "react";

export const GridDataContext = createContext<any>({});

export const GridDataProvider = ({ children }) => {
  const [gridData, setGridData] = useState({
    data: "test",
  });

  return (
    <GridDataContext.Provider value={{ gridData, setGridData }}>
      {children}
    </GridDataContext.Provider>
  );
};

// export const useGridDataContext = useContext(GridDataContext);
