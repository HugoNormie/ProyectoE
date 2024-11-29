import React from 'react';
import Menu from './components/Menu';
import AnuncioCard from './components/AnuncioCard';


import { CSSProperties } from 'react';

function App() {
  // Lista de anuncios de ejemplo
  const anuncios = [1, 2, 3, 4, 5, 6];

  // Estilos en línea
  const styles: { [key: string]: CSSProperties } = {
    app: {
      backgroundColor: '#F3F0F7',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center',
    },
    anunciosContainer: {
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
    },
  };

  return (
    <div style={styles.app}>
      {/* Menú de navegación */}
      <Menu />

      {/* Contenedor de anuncios */}
      <div style={styles.anunciosContainer}>
        {anuncios.map((_, index) => (
          <AnuncioCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
