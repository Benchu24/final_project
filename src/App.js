import './App.css';
import React from 'react';
import Header from './Header';
import Navigation from './Navigation'; // Asegúrate de tener la ruta correcta al archivo Navigation.js
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation /> {/* Agregamos el componente Navigation aquí */}
      <Main />
      {/* Otros componentes y contenido */}
      <Footer />
    </div>
  );
};

export default App;
