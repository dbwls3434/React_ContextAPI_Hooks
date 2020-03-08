import uuid from 'react-uuid';
import { ADD_CAT, REMOVE_CAT } from '../actions/Types';

export const CatReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CAT:
      return [
        ...state,
        { id: uuid(), name: payload.name, birthyear: payload.birthyear }
      ];
    case REMOVE_CAT:
      return state.filter(cat => cat.id !== payload);
    default:
      return state;
  }
};
