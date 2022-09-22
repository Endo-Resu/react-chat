import React from 'react';
import s from './App.module.scss'
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className={s.app}>
      <HomePage />
    </div>
  );
}

export default App;
