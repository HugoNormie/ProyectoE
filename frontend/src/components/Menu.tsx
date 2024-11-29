import React, { useState } from 'react';
import logo from '../assets/alerta.png';
import us from '../assets/us.png';
import { Text, Search, CirclePlus  } from 'lucide-react';

function Menu() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [anuncios, setAnuncios] = useState(6); 

  const handleOpenProfile = () => {
    setShowProfileModal(true);
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
  };

  const handleSaveProfile = () => {
    console.log('Datos guardados');
    setShowProfileModal(false);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    menu: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px 0px',
      width: '100%',
    },
    menuLogo: {
      width: '120px',
      height: '110px',
      marginRight: '40px',
      marginLeft: '20px',
    },
    us: {
      width: '80px',
      height: '50px',
      marginRight: '10px',
      marginLeft: '950px',
    },
    menuButton: {
      background: '#8B1E3F',
      border: 'none',
      color: '#FFFFFF',
      fontSize: '15px',
      cursor: 'pointer',
      fontFamily: "'Arial', sans-serif",
      padding: '10px 20px',
      borderRadius: '10px',
      transition: 'background-color 0.3s ease', 
    },
    menuButtonHover: {
      backgroundColor: '#A52A4E', 
    },
    menuButtons2: {
      background: '#000000',
      border: 'none',
      color: '#FFFFFF',
      fontSize: '15px',
      cursor: 'pointer',
      fontFamily: "'Arial', sans-serif",
      marginRight: '10px',
      marginLeft: '30px',
      padding: '10px 15px',
      borderRadius: '10px',
      transition: 'background-color 0.3s ease', 
    },
    menuButtons2Hover: {
      backgroundColor: '#333333', 
    },

    modalOverlay: {
      position: 'fixed' as const, 
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modalContent: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      width: '400px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Arial', sans-serif",
    },
    modalTitle: {
      textAlign: 'center' as const, 
      color: '#8B1E3F',
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    profileFormInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '15px',
      fontSize: '14px',
    },
    profileRow: {
      display: 'flex',
      gap: '10px',
    },
    modalButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    cancelButton: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      background: 'transparent',
      color: '#8B1E3F',
      fontSize: '14px',
    },
    saveButton: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      background: '#8B1E3F',
      color: 'white',
      fontSize: '14px',
    },

    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#F3F0F7', 
      minHeight: '100vh',
    },

    //  Sub header

    subHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F3F0F7',
      padding: '15px 20px',
      width: '100%', 
      boxSizing: 'border-box',
    },
    anunciosContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E0E0E0',
      padding: '8px 15px',
      borderRadius: '10px',
      fontFamily: "'Arial', sans-serif",
      color: '#333',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    anunciosCount: {
      backgroundColor: '#8B1E3F',
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: '5px 10px',
      fontWeight: 'bold',
    },
    searchSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#E0E0E0',
      padding: '8px 15px',
      borderRadius: '30px',
      maxWidth: '1000px',
      flexGrow: 1,
      marginRight: '10px',
      transition: 'background-color 0.3s ease', 
    },
    searchSectionHover: {
      backgroundColor: '#D6D6D6', 
    },
    
    searchIcon: {
      fontSize: '18px',
      color: '#666',
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      padding: '10px',
      backgroundColor: 'transparent',
      fontSize: '16px',
      flexGrow: 1,
      fontFamily: "'Arial', sans-serif",
    },
    createButton: {
      background: '#8B1E3F',
      border: 'none',
      color: '#FFFFFF',
      fontSize: '15px',
      cursor: 'pointer',
      fontFamily: "'Arial', sans-serif",
      padding: '10px 20px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  };

  return (
    <>
      <header style={styles.menu}>
        <img src={logo} alt="Alerta Escarlata" style={styles.menuLogo} />
        <div>
          <button
            style={styles.menuButton}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.menuButtonHover.backgroundColor!)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#8B1E3F')
            }
          >
            Mis Anuncios
          </button>
        </div>
        <div>
          <button
            style={styles.menuButtons2}
            onClick={handleOpenProfile}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.menuButtons2Hover.backgroundColor!)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#000000')
            }
          >
            Mi Perfil
          </button>
        </div>
        <div>
          <img src={us} alt="usuario" style={styles.us} />
        </div>
      </header>

      {/* Sub-Header */}
      <div style={styles.subHeader}>
        <div style={styles.anunciosContainer}>
          <span>Anuncios</span>
          <span style={styles.anunciosCount}>{anuncios}</span>
        </div>
        <div
  style={styles.searchSection}
  onMouseEnter={(e) =>
    (e.currentTarget.style.backgroundColor =
      styles.searchSectionHover.backgroundColor!)
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.backgroundColor = '#E0E0E0')
  }
>
  <Text />
  <input type="text" placeholder="Buscar" style={styles.searchInput} />
  <Search />
        </div>
        <button style={styles.createButton}>
        <CirclePlus /> Crear Nuevo Anuncio
        </button>
      </div>

      {showProfileModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>MI PERFIL</h2>
            <form>
              <div style={styles.profileRow}>
                <input
                  type="text"
                  placeholder="Luis Fernando"
                  style={styles.profileFormInput}
                />
                <input
                  type="text"
                  placeholder="Mendoza Zapata"
                  style={styles.profileFormInput}
                />
              </div>
              <div style={styles.profileRow}>
                <input
                  type="text"
                  placeholder="9141070466"
                  style={styles.profileFormInput}
                />
                <input
                  type="email"
                  placeholder="luisfernandomendoza2011@gmail.com"
                  style={styles.profileFormInput}
                />
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Cambiar contraseña
                </label>
              </div>
              <input
                type="password"
                placeholder="Antigua contraseña"
                style={styles.profileFormInput}
              />
              <div style={styles.profileRow}>
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  style={styles.profileFormInput}
                />
                <input
                  type="password"
                  placeholder="Repite la contraseña"
                  style={styles.profileFormInput}
                />
              </div>
              <div style={styles.modalButtons}>
                <button
                  type="button"
                  style={styles.cancelButton}
                  onClick={handleCloseProfile}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  style={styles.saveButton}
                  onClick={handleSaveProfile}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;