import React from 'react'
import { Container, Nav, Navbar, NavItem, NavLink, NavbarBrand, Row, Col } from 'reactstrap'
import { navItems } from './helpers/constants'
import { LinkedIn, GitHub, GitLab } from './assets'
import './styles/App.scss'

const App = () => {

  const icons = [ GitLab, GitHub, LinkedIn ]

  return (
    <>
    <div id="home" className="view">
      <div className="mask rgba-black-strong">
        <Navbar color="primary" dark>
          <Container>
            <NavbarBrand href="#intro">Joshua McGehee</NavbarBrand>
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
      </div>
    </div>
    <div id="intro" className="view">
      <Container>
        <Row className="justify-content-center">
          <Col className={ 'align-self-center' }>
            <h3 className="display-3 text-white">Joshua McGehee</h3>
            <hr />
            <h4 className="subtext-header text-white">Full-Stack Developer</h4>
          </Col>
        </Row>
      </Container>
    </div>
    <div id="projects" height="700px">
      <h1>PROJECTS</h1>
    </div>
    </>
  )
}
export default App
