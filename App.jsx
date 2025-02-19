import React from 'react';
import Header from './Header';

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <section>
      <Teste />
      <Header />
    </section>
  );
};

export default App;
