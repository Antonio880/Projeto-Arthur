
import { createContext, useContext, useState } from 'react';

const PageContext = createContext();


export function usePageContext() {
  return useContext(PageContext);
}

export function PageProvider({ children }) {
  const [page, setPage] = useState("");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
