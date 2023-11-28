import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './Menu/Menu.jsx'
import App from './App.jsx'
import { Card } from './Card/Card'
import { Hooks } from "./Hooks/Hooks"
import './index.css'
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Input } from './Input.jsx'
import { Hello } from "./Hello.jsx"


/*<div class="mainrow">
  <div class="reactcolumn">
    <div class="image">
  </div>
  <div class="rest">
    <Card titel={"React"} linkprop={"https://react.dev"} image={reactLogo} />
  </div>
</div>
<div class="vitecolumn">
  <div class="image">
    <Card image={viteLogo} />
  </div>
  <div class="rest">
    <Card titel={"Vite"} linkprop={"https://vitejs.dev"} />
  </div>
</div>
</div>*/


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Card",
        element: <Card titel={"React"} linkprop={"https://react.dev"} image={reactLogo} />,
      },      
      {
        path: "/Hooks", 
        element:  <Hooks />,
      },
      {
        path: "/Input",
        element: <Input />
      },
      {
        path: "/Hello",
        element: <Hello name={"World"} frage={"wie geht's?"} /> 
      }
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
