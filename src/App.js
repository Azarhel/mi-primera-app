import axios from "axios";
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import logo from './logo.svg';
import './App.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
/* The following line can be included in your src/index.js or App.js file */

const client = axios.create({
   baseURL: "http://localhost:3000/" 
});

function App() {

  const [respuesta, setRespuesta] = useState({});


  useEffect(() => {

    const obtenerRespuesta = async () => {
      let respuestaDelApi = await client.get('api/v1/contacto');
      console.log(respuestaDelApi)
      setRespuesta(respuestaDelApi.data)
      setRespuesta(respuestaDelApi);
    };

    obtenerRespuesta();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <ul>
          <li> Nombre : {respuesta?.nombre}</li>
          <li> Email : {respuesta?.email}</li>
          <li> Mensaje : {respuesta?.mensaje}</li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
