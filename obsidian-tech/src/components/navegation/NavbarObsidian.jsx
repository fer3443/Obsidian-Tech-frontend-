import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping, faCircleQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../obsidianNavbar/ObsidianNavbar.css';
import { FilterComponent } from '../filtro/FilterComponent';

export const ObsidianNavbar = () => {
//contador de carrito y wishlist
const [item, setItem] = useState(0)

function addItem() {
  setItem( item + 1)
}
//cambio de color y ocultar input scroll nav
const [show, setShow] = useState(false)

function changeColorAndSearch () {
    if(window.scrollY > 0){
        setShow(true)
    }else{
        setShow(false)
    }
}
window.addEventListener('scroll', changeColorAndSearch)

  return (
    <Navbar sticky="top" className='navbar-container' expand="lg">
      <Container fluid className='containerFluid'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className={show ? 'nav-flex-column navbar-scroll-color':'nav-flex-column'}>
            <Nav
              className="navbar-links"
              navbarScroll
            >
              <div className='group-links'>
              <NavLink href="#" className='navLink'>Destacados</NavLink>
              <NavLink href="#" className='navLink'>Contacto</NavLink>
              </div>
              <Navbar.Brand className='text-white' href="#home">Obsidian-tech</Navbar.Brand>
              <div className='group-links'>
              <NavLink className='navLink'><FontAwesomeIcon icon={faUser} /></NavLink>
              <div className='boxIcon'>
                  <NavLink className='navLink'><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                  <div className='contador'>{item}</div>
              </div>
              <div className='boxIcon'>
                  <NavLink className='navLink'><FontAwesomeIcon icon={faHeart} /></NavLink>
                  <div className='contador'>{item}</div>
              </div>
              <NavLink className='navLink'><FontAwesomeIcon icon={faCircleQuestion} /></NavLink>
              </div>
            </Nav>
            <FilterComponent show = {show}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}