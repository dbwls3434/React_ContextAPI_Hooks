import React, { useContext } from 'react';
import { CatContext } from '../contexts/CatContext';
import { ADD_CAT, REMOVE_CAT } from './Types';

// 이걸 사용하고 싶은데 계속 에러 나서 못쓰고 있네...

export const getCats = () => {
  const { cats } = useContext(CatContext);
  return cats;
};

export const addCat = (name, birthyear) => {
  const { dispatch } = useContext(CatContext);
  dispatch({
    type: ADD_CAT,
    payload: { name, birthyear }
  });
};

export const removeCat = id => {
  const { dispatch } = useContext(CatContext);
  dispatch({
    type: REMOVE_CAT,
    payload: id
  });
};
