import React, { useContext } from 'react';
import { CatContext } from '../contexts/CatContext';
import { REMOVE_CAT } from '../actions/Types';

const CatList = () => {
  const { cats, dispatch } = useContext(CatContext);

  const removeCat = id => {
    dispatch({
      type: REMOVE_CAT,
      payload: id
    });
  };

  return (
    <ul>
      {cats.map(cat => (
        <li key={cat.id}>
          <div>id: {cat.id}</div>
          <div>name: {cat.name}</div>
          <div> birthyear: {cat.birthyear}</div>
          <button onClick={() => removeCat(cat.id)}>remove</button>
        </li>
      ))}
    </ul>
  );
};

export default CatList;
