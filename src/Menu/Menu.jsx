import './Menu.css';
import { Link, Outlet } from "react-router-dom";


export function Menu() {
   return (
    <>
      <div className="menubar">
      <div className="Link"><Link to="/Hello">Hello</Link></div>
        <div className="Link"><Link to="/Hooks">Count Buttons</Link></div>
        <div className="Link"><Link to="/Card">Cards</Link></div>
        <div className="Link"><Link to="/Input">Input Field</Link></div>  
      </div> 
      <Outlet />
      </>
    );
    }
    

