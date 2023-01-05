import React, { createContext, useContext, useState } from "react";

const GridDataContext = createContext({});

export const GridDataProvider = ({ children }) => {
  const [gridData, setGridData] = useState({
    darkMode: false,
  });

  return (
    <GridDataContext.Provider value={{ gridData, setGridData }}>
      {children}
    </GridDataContext.Provider>
  );
};

export const useGridDataContext = useContext(GridDataContext);
