import React from 'react';

const Contact = () => {
  return (
    <div id='contacto' className="h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Nombre:</div>
          <div className="w-3/4">Eddi Oscaldo</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Teléfono:</div>
          <div className="w-3/4">99343830</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Facebook:</div>
          <div className="w-3/4">
            <a href="https://www.facebook.com/eddioscaldo" className="text-white">Eddi Oscaldo</a>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Instagram:</div>
          <div className="w-3/4">
            <a href="https://www.instagram.com/eddioscaldo" className="text-white">@eddioscaldo</a>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Correo:</div>
          <div className="w-3/4">eddioscaldo@example.com</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-1/4">Dirección:</div>
          <div className="w-3/4">123 Calle Ficticia, Ciudad Imaginaria</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
