
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';


import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

import React, { useState } from 'react';


function App() 
{

  

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

    return (

      <div className="card--body">
        <Nav  tabs>

        </Nav>


      <Nav tabs className='center'>

        <NavItem>
          <img  className='imagen' src={logo} alt="No"></img>
        </NavItem>
       

      <NavItem>
        <NavLink className="letra"  href="#" >
          MES
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="letra" nav caret active>
          Estaciones
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem header >BRK</DropdownItem>
          <DropdownItem header>FINAL PACK</DropdownItem>

        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink className="card--body" href="#">Que es?</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="card--body" href="#">Integrantes en B44</NavLink>
      </NavItem>
      
    </Nav>
    </div>
    
      
    );
}

export default App;

