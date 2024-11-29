import React, { useState } from 'react';
import logo from '../assets/alerta.png';
import whatsappIcon from '../assets/whatsapp.png';
import { Facebook, Instagram, Share2, PencilRuler, Trash2  } from 'lucide-react';


function AnuncioCard() {
  const [isEditing, setIsEditing] = useState(false); // Modal de edición
  const [cardData, setCardData] = useState({
    bloodType: 'A+',
    name: 'Alma Angelica',
    surname: 'Perez Lopez',
    hospital: 'Hospital Juan Graham',
    contact: 'Luis Robles Perez',
    phone: '9934657890',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    alert('Ficha eliminada');
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setCardData({
      bloodType: formData.get('bloodType') as string,
      name: formData.get('name') as string,
      surname: formData.get('surname') as string,
      hospital: formData.get('hospital') as string,
      contact: formData.get('contact') as string,
      phone: formData.get('phone') as string,
    });
    setIsEditing(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#F3F0F7', 
          color: '#8B1E3F',
          width: '260px',
          padding: '20px',
          borderRadius: '10px',
          border: '40px solid #8B1E3F',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '50px',
          marginLeft: '50px',
        }}
      >
        {/* Logo y tipo de sangre */}
        <div
          style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src={logo}
            alt="Logo Anuncio"
            style={{
              width: '100px',
              height: '100px',
              marginBottom: '10px',
            }}
          />
          <h2
            style={{
              display: 'flex',
              fontSize: '60px',
              fontWeight: 'bold',
              alignItems: 'right',
              justifyContent: 'right',
              color: '#8B1E3F',
              margin: '10px 60px',
            }}
          >
            {cardData.bloodType}
          </h2>
        </div>

        {/* Detalles del anuncio */}
        <p
          style={{
            fontSize: '20px',
            textAlign: 'justify',
            fontFamily: 'Arial, sans-serif',
            margin: '10px 0',
            color: '#8B1E3F',
          }}
        >
          Se buscan donadores de sangre para:
        </p>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#8B1E3F',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            margin: '10px 0',
          }}
        >
          {cardData.name} {cardData.surname}
        </p>
        <p
          style={{
            fontSize: '19px',
            margin: '5px 5',
            color: '#a51111',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Se encuentra en: {cardData.hospital}
        </p>
        <p
          style={{
            fontSize: '19px',
            margin: '5px 5',
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Datos de contacto: {cardData.contact}
        </p>
        <p
          style={{
            fontSize: '19px',
            margin: '5px 5',
            color: '#000000',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Tel. {cardData.phone}
        </p>

        {/* Redes sociales y acciones */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          {/* Botones de redes sociales */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <a
              href="#"
              style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
    <Share2 />

            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
                gap: '10px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
<Facebook />
            </a>

            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                style={{
                  width: '20px',
                  height: '20px',
                }}
              />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
    <Instagram />

            </a>
          </div>

          {/* Botones de editar y borrar */}
          <div
            style={{
              display: 'flex',
              gap: '-17px',
            }}
          >
            <button
              onClick={handleEdit}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
    <PencilRuler />

            </button>
            <button
              onClick={handleDelete}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
    <Trash2 />

            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnuncioCard;