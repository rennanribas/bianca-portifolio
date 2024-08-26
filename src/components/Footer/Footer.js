import React from 'react'
import { Link } from 'react-router-dom'
import useTranslation from 'hooks/useTranslation'
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
  const t = useTranslation()

  return (
    <footer className='footer pt-0'>
      <Container>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <NavLink to='/' tag={Link}>
                  {t('homePage')}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#whoiam'>{t('whoIAm')}</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <h3 className='title text-right'>{t('contact')}</h3>
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
                {t('followOnInstagram')}
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
                {t('followOnFacebook')}
              </UncontrolledTooltip>
              <Button
                className='btn-icon btn-neutral btn-round btn-simple'
                color='default'
                href='https://wa.me/+5512981740654'
                id='tooltip230450802'
                target='_blank'
              >
                <i className='fab fa-whatsapp' />
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip230450802'>
                {t('getInTouch')}
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
