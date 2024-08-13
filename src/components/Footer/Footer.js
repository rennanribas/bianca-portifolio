/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

export default function Footer() {
  return (
    <footer className='footer pt-0'>
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <NavLink to='/' tag={Link}>
                  Pagina Inicial
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href='https://creative-tim.com/contact-us?ref=blkdsr-footer'>
                  Quem Eu Sou
                </NavLink>
              </NavItem>
              {/* 
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  Profile
                </NavLink>
              </NavItem> */}
            </Nav>
          </Col>
          {/* <Col>
            <Nav>
              
              <NavItem>
                <NavLink href='https://creative-tim.com/about-us?ref=blkdsr-footer'>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://creative-tim.com/blog?ref=blkdsr-footer'>
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://opensource.org/licenses/MIT'>
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col> */}
          <Col>
            <h3 className='title text-right'>Contato</h3>
            <div className='btn-wrapper profile'>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://www.instagram.com/personal.biancareis'
                id='tooltip622135962'
                target='_blank'
              >
                <i className='fab fa-instagram' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip622135962'>
                Siga no Instagram
              </UncontrolledTooltip>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://www.facebook.com/share/8XWafFV7TixfF9x6/?mibextid=LQQJ4d'
                id='tooltip230450801'
                target='_blank'
              >
                <i className='fab fa-facebook-square' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip230450801'>
                Siga no Facebook
              </UncontrolledTooltip>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://wa.me/+5512981740654'
                id='tooltip230450801'
                target='_blank'
              >
                <i className='fab fa-whatsapp' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip230450801'>
                Entre em contato
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
