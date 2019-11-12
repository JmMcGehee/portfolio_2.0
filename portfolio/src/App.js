import React from 'react'
import { Container, Nav, Navbar, NavItem, NavLink, NavbarBrand, Row, Col } from 'reactstrap'
import { navItems } from './helpers/constants'
import { LinkedIn, GitHub, GitLab, ProfilePic } from './assets'
import './styles/App.scss'

const App = () => {

  const icons = [ GitLab, GitHub, LinkedIn ]

  return (
    <>
    <div id="home" className="view">
      <div className="">
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
      <Container fluid className="px-3 py-5 d-flex justify-content-center">
        <Row>
          <Col>
            <h3 className="display-3 font-weight-bold text-white pt-5">Joshua McGehee</h3>
            <hr />
            <h4 className="subtext-header text-white pb-5">Full-Stack Developer</h4>
          </Col>
        </Row>
      </Container>
    </div>
    <div id="bio">
      <Container fluid className="bg-primary">
        <h1>ABOUT ME</h1>
        <hr />
        <div class="avatar mx-auto mb-4">
          <img
            src={ ProfilePic }
            height="300px"
            class="rounded-circle"
            alt="profile_pic"/>
          </div>
      </Container>
    </div>
    <div id="projects">
      <h1>PROJECTS</h1>
    </div>
    </>
  )
}
export default App
