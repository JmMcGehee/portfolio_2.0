import React from 'react'
import { Container, Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { navItems } from './helpers/constants'
import { LinkedIn, GitHub, GitLab } from './assets'
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
              <NavLink>
                <img src={ GitLab } alt="GitLab" height="30px"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <img src={ GitHub } alt="GitHub" height="30px"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <img src={ LinkedIn } alt="LinkedIn" height="30px"/>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default App
