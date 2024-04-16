import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import NavigationBar from './Navegacion/NavigationBar';
import Home from './Paginas/Home';
import About from './Paginas/About';
import { router } from './router/AppRouter';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>


export function App() {

  return (
    <div>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;