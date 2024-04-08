import React from 'react';

const PhotographerServices = () => {
  // Lista de servicios del fotógrafo
  const services = [
    'Sesiones de fotografías',
    'Retratos',
    'Fotografía de eventos',
    'Fotografía de productos',
    'Edición de fotos',
    'Impresiones de alta calidad',
    'Sesiones fotográficas en exteriores',
    'Álbumes personalizados',
    'Fotografía de bodas',
    'Cuadros decorativos',
  ];

  return (
    <div id='servicios' className="w-full h-screen flex items-center justify-center">
      <div className="w-3/4 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographerServices;
