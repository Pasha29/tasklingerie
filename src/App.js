import React from 'react';
import '../src/materials/fonts/fonts.css';
import './materials/resetstyles/reset.css';
import css from './App.module.scss';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';

const App = () => {
  return (
    <div className={css['container']}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
