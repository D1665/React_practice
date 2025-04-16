import React, { useContext } from 'react';
import './App.css';

import Header from './components/header';
import Section from './components/Section';
import Footer from './components/footer';

import { Datacontext } from './context/UserContext';

function App() {
  const data = useContext(Datacontext);

  return (
    <>
      <div>This is app — {data.username}</div>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
