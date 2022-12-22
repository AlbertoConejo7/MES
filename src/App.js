import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <div>
    <Modal isOpen={open} toggle={() => setOpen(false)}>
    <ModalHeader>
      Felicidades kenneth
    </ModalHeader>
    <ModalBody>
      Kenneth eres un carepicha
    </ModalBody>
    <Button onClick={() => setOpen(false)} >
    cerrar
  </Button>
    
  </Modal>
    
  <Button onClick={() => setOpen(true)} >
    Abrir
  </Button>

  </div>

  
    
  );
}

export default App;

