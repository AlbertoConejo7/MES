
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
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Toast,
  ToastBody,
  ToastHeader,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,


} from 'reactstrap';

import React, { useState } from 'react';

const items = [
  {
    src: 'https://picsum.photos/id/123/1400/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1400/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1400/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];




  



function App() 
{

  const [open, setOpen] = useState('1');
  const toggle2 = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  

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

          <>
      
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">
              Home
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">
              Library
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem >
            Data
          </BreadcrumbItem>
        </Breadcrumb>
      </>


    <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
           
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
          <div
    className="p-3 my-2 rounded"
    style={{
      background: 'black'
    }}
  >
    <Toast>
      <ToastHeader>
        BRK
      </ToastHeader>
      <ToastBody className='negra'>
      Finalizamos este año con la implementación del 
      sistema electrónico MES en dos áreas: BRK y Sub-Ensambles de EP.
      </ToastBody>
    </Toast>
    
  </div>
  <div>
      <Accordion open={open} toggle={toggle2}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
         
    </div>
    
    
      
    );
}

export default App;

