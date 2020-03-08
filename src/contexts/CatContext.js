import React, { createContext, useReducer, useEffect } from 'react';
import { CatReducer } from '../reducers/CatReducer';

export const CatContext = createContext();

const CatContextProvider = props => {
  const [cats, dispatch] = useReducer(CatReducer, [], () => {
    return localStorage.getItem('cats')
      ? JSON.parse(localStorage.getItem('cats'))
      : [];
  });

  useEffect(() => {
    localStorage.setItem('cats', JSON.stringify(cats));
  }, [cats]);

  return (
    <CatContext.Provider value={{ cats, dispatch }}>
      {props.children}
    </CatContext.Provider>
  );
};

export default CatContextProvider;
