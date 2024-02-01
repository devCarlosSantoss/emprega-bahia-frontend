import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import App from './App.jsx';
import Cadastro from './routes/Cadastro.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [{
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "cadastro",
    element: <Cadastro/>
  }
]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
