// Importa React y las dependencias necesarias
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté instalado
import './App.css'; // Estilos generales de tu App
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Componentes de react-router-dom
import NavigationBar from './Navegacion/NavigationBar'; // Tu componente de barra de navegación
import Home from './Paginas/Home'; // Componente de la página de inicio
import About from './Paginas/About'; // Componente de la página de acerca de

// Importa las imágenes desde la carpeta src/images
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar /> {/* Muestra tu barra de navegación en todas las páginas */}
        <Routes>
          {/* Define tus rutas y los componentes que deben renderizarse */}
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* Carrusel de Bootstrap con tus imágenes */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Imagen 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

