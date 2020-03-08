import React from 'react';
import './App.css';
import CatContextProvider from './contexts/CatContext';
import CatList from './components/CatList';
import AddCatForm from './components/AddCatForm';

const App = () => {
  return (
    <CatContextProvider>
      <div className='App'>
        <h1>This is React_ContextAPI_Hooks</h1>
        <CatList />
        <AddCatForm />
      </div>
    </CatContextProvider>
  );
};

export default App;
