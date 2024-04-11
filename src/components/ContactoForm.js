import React, { useState } from "react";
import axios from "axios";

const ContactoForm = () => {
  // Estados para manejar los inputs del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    await enviar();
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  const enviar = async () => {
    const datos = {
      nombre,
      correo,
      mensaje,
    };

    try {
      const urlBase = 'https://api-lyart-theta.vercel.app//api/v1/contacto'
      const response = await axios.post(
        urlBase,
        datos
      );
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div
      id="acercateanosotros"
      className="h-screen flex items-center justify-center"
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Datos del cliente
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-white"
            >
              Nombre:
            </label>
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
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-white"
            >
              Correo:
            </label>
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
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-white"
            >
              Mensaje:
            </label>
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
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactoForm;
