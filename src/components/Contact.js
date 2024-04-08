import React from 'react';

const Contact = () => {
  return (
    <div id='contacto' className="h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Nombre:</div>
          <div className="w-3/4">Eddi Osvaldo</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Teléfono:</div>
          <div className="w-3/4">99343830</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Facebook:</div>
          <div className="w-3/4">
            {/* Asegúrate de que la URL es correcta */}
            <a href="https://www.facebook.com/profile.php?id=61554374003677" className="text-white">Os-Car Fotografía</a>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Instagram:</div>
          <div className="w-3/4">
            <a href="https://www.instagram.com/eddiosvaldo" className="text-white">@eddiosvaldo</a>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Correo:</div>
          <div className="w-3/4">edd89.500@gmail.com</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Dirección:</div>
          <div className="w-3/4">Tamulté de las Sabanas, Centro, Tabasco.</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

