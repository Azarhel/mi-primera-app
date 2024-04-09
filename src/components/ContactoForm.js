import React, { useState } from 'react';

const ContactoForm = () => {
  // Estados para manejar los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lo que sucederá cuando se envíe el formulario
    // Por ejemplo, enviar estos datos a un servidor o imprimirlos en consola
    console.log('Enviando', { nombre, correo, mensaje });
    // Limpiar el formulario después del envío
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div id='acerca de nosotros' className="h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
<form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label htmlFor="nombre" className="block text-sm font-medium text-white">Nombre:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm"
      required
    />
  </div>
  <div>
    <label htmlFor="correo" className="block text-sm font-medium text-white">Correo:</label>
    <input
      type="email"
      id="correo"
      name="correo"
      value={correo}
      onChange={(e) => setCorreo(e.target.value)}
      className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm"
      required
    />
  </div>
  <div>
    <label htmlFor="mensaje" className="block text-sm font-medium text-white">Mensaje:</label>
    <textarea
      id="mensaje"
      name="mensaje"
      rows="4"
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
      className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm"
      required
    />
  </div>
  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
    Enviar
  </button>
</form>
      </div>
    </div>
  );
};

export default ContactoForm;