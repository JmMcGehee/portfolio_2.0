import React from 'react'
import { Container, Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { navItems } from './helpers/constants'
import { LinkedIn, GitHub, GitLab } from './assets'
import './App.css'

const App = () => {

  const icons = [ GitLab, GitHub, LinkedIn ]

  return (
    <>
    <div id="home" className="view">
      <div className="mask rgba-black-strong">
        <Navbar color="primary" dark>
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
                      className="text-secondary"
                    >{ nav.title }</NavLink>
                  </NavItem>
                ))
              }
            </Nav>
            <Nav>
              {
                icons.map(icon => (
                  <NavItem>
                    <NavLink>
                      <img src={ icon } alt="#" height="30px"/>
                    </NavLink>
                  </NavItem>
                ))
              }
            </Nav>
          </Container>
        </Navbar>
        <Container fluid>

        </Container>
      </div>
    </div>
    <div id="bio" height="700px">
      <h1>ABOUT ME</h1>
    </div>
    <div id="projects" height="700px">
      <h1>PROJECTS</h1>
    </div>
    </>
  )
}
export default App
