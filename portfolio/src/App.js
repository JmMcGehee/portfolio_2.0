import React from 'react'
import { Container, Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { navItems } from './helpers/constants'
import './App.css'

const App = () => {
  return (
    <div id="intro">
      <Navbar color="info" dark>
        <Container>
          <NavbarBrand href="#">Joshua McGehee</NavbarBrand>
          <Nav className="mr-auto">
            {
              navItems.map(nav => (
                <NavItem key={ `${ nav.title } + ${ nav.alt }` }>
                  <NavLink
                    href={ nav.href }
                    alt={ nav.alt }
                    key={ nav.title }
                  >{ nav.title }</NavLink>
                </NavItem>
              ))
            }
          </Nav>
          <Nav>
            <NavItem>
              <FontAwesomeIcon icon={ faLink } />
            </NavItem>
          </Nav>
          <form className="form-inline">
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </Container>
      </Navbar>
    </div>
  )
}
export default App
