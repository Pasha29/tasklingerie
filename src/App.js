import React from 'react';
import '../src/materials/fonts/fonts.css';
import './materials/resetstyles/reset.css';
import css from './App.module.scss';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import {HashRouter} from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <div className={css['container']}>
        <Header />
        <Main />
      </div>
      </HashRouter>
  );
}

export default App;
