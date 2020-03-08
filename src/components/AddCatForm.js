import React, { useContext, useState } from 'react';
import { CatContext } from '../contexts/CatContext';
import { ADD_CAT } from '../actions/Types';

const AddCatForm = () => {
  const { dispatch } = useContext(CatContext);

  const [formData, setFormData] = useState({ name: '', birthyear: '' });

  const onSubmit = e => {
    e.preventDefault();

    dispatch({
      type: ADD_CAT,
      payload: { name: formData.name, birthyear: formData.birthyear }
    });
    setFormData({ name: '', birthyear: '' });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        name :{' '}
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={e => onChange(e)}
        />
      </div>
      <div>
        birthyear :{' '}
        <input
          type='text'
          name='birthyear'
          value={formData.birthyear}
          onChange={e => onChange(e)}
        />
      </div>
      <input type='submit' value='submit' />
    </form>
  );
};

export default AddCatForm;
